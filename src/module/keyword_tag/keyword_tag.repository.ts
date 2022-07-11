import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { KeywordTag, KeywordTagDocument } from './entity/keyword_tag.schema';
import { Model } from 'mongoose';
import { EntityRepository } from '../Arepository/entity.repository';

@Injectable()
export class KeywordTagRepository extends EntityRepository<KeywordTagDocument> {
  constructor(
    @InjectModel(KeywordTag.name)
    private readonly KeywordTagModel: Model<KeywordTagDocument>,
  ) {
    super(KeywordTagModel);
  }
}
