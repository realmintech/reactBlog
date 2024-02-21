import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'Password should not be empty' })
  readonly password: string;

  @IsEmail({}, { message: 'Invalid email format' })
  readonly email: string;
}
