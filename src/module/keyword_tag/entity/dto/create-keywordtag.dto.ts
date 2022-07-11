import { IsString } from 'class-validator';

export class CreateKeywordTagDto {
  @IsString()
  keyword_id: string;

  @IsString()
  tag_id: string;
}
