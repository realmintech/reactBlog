import { IsEmail, IsNotEmpty, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'Username should not be empty' })
  readonly username: string;

  @IsEmail({}, { message: 'Invalid email format' })
  readonly email: string;

  @IsNotEmpty({ message: 'Password should not be empty' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(20, { message: 'Password cannot be longer than 20 characters' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  readonly password: string;

  @IsNotEmpty({ message: 'Confirm Password should not be empty' })
  readonly confirmPassword: string;

  readonly role: string;

  readonly isLoggedIn: boolean;

  readonly timestamps: Date;

  // These fields are optional and might not need validation
  readonly resetPasswordToken?: string;

  readonly resetPasswordExpires?: Date;

  readonly confirmationToken?: string;

  readonly isConfirmed?: boolean;
}
