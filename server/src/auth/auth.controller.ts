import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpStatus,
  HttpException,
  Put,
  Req,
  Request,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Public } from '../common/decorators/public.decorator';
import { Auth, Role } from './entities/auth.entity';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(
    @Body() createAuthDto: CreateAuthDto,
  ): Promise<{ user: Auth }> {
    const user = await this.authService.register(createAuthDto);
    return { user };
  }

  @Public()
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    if (!loginUserDto) {
      throw new BadRequestException('email and password are required');
    }

    const token = await this.authService.login(loginUserDto);
    if (!token) {
      throw new HttpException(
        'Invalid login credentials',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return { token };
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req['user'];
  }

  @Put(':id')
  @Roles(Role.Admin, Role.Guest)
  async updateUser(
    @Param('id') id: string,
    @Body() UpdateAuthDto: any,
    @Req() req,
  ) {
    const userId = id;

    return this.authService.updateUser(userId, UpdateAuthDto, req.user.role);
  }

  @Patch('update-password')
  async changePassword(
    @Body('oldPassword') oldPassword: string,
    @Body('newPassword') newPassword: string,
    @Request() req,
  ) {
    const userId = req.user.id;
    const result = await this.authService.updateUserPassword(
      userId,
      oldPassword,
      newPassword,
    );

    return result;
  }

  @Post('forgot-password')
  async forgotPassword(@Body('email') email: string): Promise<void> {
    await this.authService.forgotPassword(email);
  }

  @Patch('reset-password/:email/:resetToken')
  async resetPassword(
    @Param('email') email: string,
    @Param('resetToken') resetToken: string,
    @Body('newPassword') newPassword: string,
  ): Promise<void> {
    await this.authService.resetPassword(email, resetToken, newPassword);
  }

  @Patch('reset-password/:email/:resetToken')
  async confirmRegistration(
    @Param('email') email: string,
    @Param('confirmationToken') confirmationToken: string,
  ): Promise<any> {
    const user = await this.authService.confirmRegistration(
      email,
      confirmationToken,
    );

    return { message: 'Registration confirmed successfully', user };
  }
}
