import {
  IsNotEmpty,
  IsBoolean,
  IsString,
  IsNumber,
  IsEmail,
  IsOptional,
} from 'class-validator';
import { Ilink } from '../interface/post.interface';

export class CreatePostDto {
  @IsBoolean()
  sponsored: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  editor: string;

  @IsNotEmpty()
  @IsString()
  excerpt: string;

  @IsOptional()
  @IsString()
  go_aff: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsNumber()
  status: number;

  @IsOptional()
  @IsString()
  schedule: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  featured_img: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  amp_html: string;

  @IsNotEmpty()
  link: Ilink;

  @IsNotEmpty()
  @IsString()
  user: string;
}
