import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({ description: 'Username' })
  readonly username: string;

  readonly email: string;

  readonly password: string;

  readonly confirmPassword: string;

  readonly role: string;

  readonly isLoggedIn: boolean;

  readonly timestamps: Date;

  readonly resetPasswordToken?: string;

  readonly resetPasswordExpires?: Date;

  readonly confirmationToken: string;

  readonly isConfirmed: boolean;
}
