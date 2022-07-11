import { Module } from '@nestjs/common';
import { KeywordTagController } from './keyword_tag.controller';
import { KeywordTagService } from './keyword_tag.service';
import { KeywordTagRepository } from './keyword_tag.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { KeywordTag, KeywordTagSchema } from './entity/keyword_tag.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: KeywordTag.name, schema: KeywordTagSchema },
    ]),
  ],
  controllers: [KeywordTagController],
  providers: [KeywordTagService, KeywordTagRepository],
})
export class KeywordTagModule {}
