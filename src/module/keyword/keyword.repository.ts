import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Keyword, KeywordDocument } from './entity/keyword.schema';
import { Model } from 'mongoose';
import { EntityRepository } from '../Arepository/entity.repository';

@Injectable()
export class KeywordRepository extends EntityRepository<KeywordDocument> {
  constructor(
    @InjectModel(Keyword.name)
    private readonly keywordModel: Model<KeywordDocument>,
  ) {
    super(keywordModel);
  }
}
