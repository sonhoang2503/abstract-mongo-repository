import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './entity/post.schema';
import { Model } from 'mongoose';
import { EntityRepository } from '../Arepository/entity.repository';

@Injectable()
export class PostRepository extends EntityRepository<PostDocument> {
  constructor(
    @InjectModel(Post.name)
    private readonly PostModel: Model<PostDocument>,
  ) {
    super(PostModel);
  }
}
