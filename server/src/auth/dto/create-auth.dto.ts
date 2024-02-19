import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({ description: 'Username' })
  readonly username: string;

  @ApiProperty({ description: 'Email address', example: 'user@example.com' })
  readonly email: string;

  @ApiProperty({ description: 'Password' })
  readonly password: string;


  @ApiProperty({ description: 'confirmPassword' })
  readonly confirmPassword: string;


  @ApiProperty({ description: 'User role' })
  readonly role: string;

  @ApiProperty({ description: 'isLoggedIn' })
  readonly isLoggedIn:boolean

  @ApiProperty({ description: 'Timestamps' })
  readonly timestamps: Date;
}