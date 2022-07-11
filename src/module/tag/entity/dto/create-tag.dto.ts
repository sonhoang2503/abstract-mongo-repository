import { IsString } from 'class-validator';

export class CreateTagDto {
  @IsString()
  slug: string;

  @IsString()
  description: string;

  @IsString()
  name: string;
}
