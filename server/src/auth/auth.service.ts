import {
  Injectable,
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as crypto from 'crypto';
import { Auth, AuthDocument } from './entities/auth.entity';
// import { EmailService } from '../utils/email.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly authModel: Model<AuthDocument>,
    private jwtService: JwtService,
    // private emailService: EmailService,
  ) {}

  private generateConfirmationToken(): string {
    const token = crypto.randomBytes(20).toString('hex');
    return token;
  }

  async register(createUserDto: CreateAuthDto): Promise<Auth> {
    if (createUserDto.password && createUserDto.confirmPassword) {
      if (createUserDto.password !== createUserDto.confirmPassword) {
        throw new BadRequestException('Passwords do not match');
      }
    } else {
      throw new BadRequestException(
        'Password and Confirm Password are required',
      );
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const existingUser = await this.authModel.findOne({
      email: createUserDto.email,
    });
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const confirmationToken = this.generateConfirmationToken();

    const createdUser = new this.authModel({
      ...createUserDto,
      password: hashedPassword,
      confirmationToken,
    });

    await createdUser.save();

    // Send confirmation email
    // await this.emailService.sendEmail(
    //   'confirmation',
    //   createdUser.email,
    //   confirmationToken,
    // );

    return createdUser;
  }

  async confirmRegistration(
    email: string,
    confirmationToken: string,
  ): Promise<Auth> {
    const user = await this.authModel.findOne({ email, confirmationToken });

    if (!user) {
      throw new NotFoundException('Invalid confirmation token or email');
    }

    if (user.isConfirmed) {
      throw new BadRequestException('User is already confirmed');
    }

    // Mark the user as confirmed
    user.isConfirmed = true;
    user.confirmationToken = null;

    await user.save();

    return user;
  }

  async login(
    loginUserDto: LoginUserDto,
  ): Promise<{ token: string; user: Auth }> {
    if (!loginUserDto || !loginUserDto.email || !loginUserDto.password) {
      return null;
    }

    const user = await this.authModel
      .findOne({ email: loginUserDto.email })
      .exec();

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      return null;
    }
    const payload = { name: user.email, sub: user._id };
    const token = await this.jwtService.signAsync(payload);

    return { token, user };
  }

  async findById(_id: string): Promise<Auth> {
    const user = await this.authModel.findById(_id);
    return user;
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateAuthDto,
    user: Auth,
  ): Promise<Auth> {
    const allowedUpdates = ['username', 'isLoggedIn', 'email'];
    const updates = Object.keys(updateUserDto);
    const isValidUpdate = updates.every((update) =>
      allowedUpdates.includes(update),
    );

    if (!isValidUpdate) {
      throw new BadRequestException('Invalid updates!');
    }

    const existingUser = await this.authModel.findById(userId);

    if (!existingUser) {
      throw new NotFoundException('User not found!');
    }

    if (user.role && existingUser._id.toString() !== user.toString()) {
      throw new UnauthorizedException(
        'You are not authorized to delete this user',
      );
    }

    updates.forEach((update) => {
      existingUser[update] = updateUserDto[update];
    });

    await existingUser.save();

    return existingUser;
  }

  async updateUserPassword(
    userId: string,
    oldPassword: string,
    newPassword: string,
  ): Promise<Auth> {
    const user = await this.authModel.findById(userId);

    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    const oldPasswordMatches = await bcrypt.compare(oldPassword, user.password);

    if (!oldPasswordMatches) {
      throw new UnauthorizedException('Invalid old password');
    }
    if (oldPassword === newPassword) {
      throw new BadRequestException(
        'New password cannot be the same as old password',
      );
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    const updatedUser = await this.authModel.findByIdAndUpdate(
      userId,
      { password: hashedNewPassword },
      { new: true },
    );

    return updatedUser;
  }

  async forgotPassword(email: string): Promise<void> {
    const user = await this.authModel.findOne({ email });

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    const resetToken = this.generateResetToken();

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = new Date(Date.now() + 3600000);

    await user.save();

    // await this.emailService.sendEmail('resetToken', email, resetToken);
  }

  private generateResetToken(): string {
    return crypto.randomBytes(20).toString('hex');
  }

  async resetPassword(
    email: string,
    resetToken: string,
    newPassword: string,
  ): Promise<void> {
    const user = await this.authModel.findOne({
      email,
      resetPasswordToken: resetToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid or expired reset token');
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();
  }
}
