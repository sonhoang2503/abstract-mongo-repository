import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import { Document } from 'mongoose';
import { Role } from '../../../common/enum/role.enum';

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  @IsEmail()
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: 'string', enum: Role, default: Role.User })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
