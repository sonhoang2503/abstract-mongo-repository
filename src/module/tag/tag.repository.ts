import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tag, TagDocument } from './entity/tag.schema';
import { Model } from 'mongoose';
import { EntityRepository } from '../Arepository/entity.repository';

@Injectable()
export class TagRepository extends EntityRepository<TagDocument> {
  constructor(
    @InjectModel(Tag.name)
    private readonly TagModel: Model<TagDocument>,
  ) {
    super(TagModel);
  }
}
