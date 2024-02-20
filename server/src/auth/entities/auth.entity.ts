import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsOptional,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export enum Role {
  Guest = 'guest',
  SubAdmin = 'sub_admin',
  Admin = 'admin',
}

@Schema({ timestamps: true })
export class Auth {
  @Prop({ type: String, required: true })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Username should not be empty' })
  username: string;

  @Prop({ required: true, unique: true })
  @IsString({ message: 'Password must be a string' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @Prop({ required: true })
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @IsNotEmpty({ message: 'Password should not be empty' })
  password: string;

  @Prop({ type: Boolean, default: false })
  isLoggedIn: boolean;

  
  @Prop({ type: String, enum: Role, default: Role.Guest })
  @IsOptional()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  role: Role;
}

export type AuthDocument = Auth & Document;

export const AuthSchema =
  SchemaFactory.createForClass(Auth).plugin(uniqueValidator);