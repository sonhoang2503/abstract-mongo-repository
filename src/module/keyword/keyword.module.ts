import { Module } from '@nestjs/common';
import { KeywordController } from './keyword.controller';
import { KeywordService } from './keyword.service';
import { KeywordRepository } from './keyword.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Keyword, KeywordSchema } from './entity/keyword.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Keyword.name, schema: KeywordSchema }]),
  ],
  controllers: [KeywordController],
  providers: [KeywordService, KeywordRepository],
})
export class KeywordModule {}
