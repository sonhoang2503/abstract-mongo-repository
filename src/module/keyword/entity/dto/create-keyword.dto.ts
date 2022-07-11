import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateKeywordDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  readonly keyword: string;

  @IsNumber()
  @Min(0)
  @Max(10)
  readonly tracked: number;
}
