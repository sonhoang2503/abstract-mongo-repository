import { PartialType } from '@nestjs/swagger';
import { CreateKeywordTagDto } from './create-keywordtag.dto';

export class UpdateKeywordTagDto extends PartialType(CreateKeywordTagDto) {}
