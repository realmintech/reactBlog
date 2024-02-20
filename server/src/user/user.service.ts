import {
  Injectable,
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from '../auth/entities/auth.entity';
import { Role } from '../auth/entities/auth.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Auth.name) private readonly userModel: Model<AuthDocument>,
  ) {}

  async findAll(
    page: number = 1,
    pageSize: number = 10,
  ): Promise<{ users: Auth[]; total: number }> {
    const skip = (page - 1) * pageSize;
    const query = this.userModel.find().skip(skip).limit(pageSize).exec();
    const total = await this.userModel.countDocuments().exec();
    const users = await query;

    return { users, total };
  }

  async findOne(userId: string): Promise<Auth> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(
    userId: string,
    updatedUser: Partial<Auth>,
  ): Promise<Auth | null> {
    const user = await this.userModel.findById(userId);

    if (!user) {
      return null;
    }
    Object.assign(user, updatedUser);

    await user.save();

    return user;
  }

  async deleteUser(userId: string, userRole: Role): Promise<Auth> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (userRole !== Role.Admin && user._id.toString() !== userId) {
      throw new UnauthorizedException(
        'You are not authorized to delete this user',
      );
    }

    return this.userModel.findByIdAndRemove(userId);
  }
}
