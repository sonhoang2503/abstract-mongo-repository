import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Ilink } from './interface/post.interface';

@Schema({
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class Post {
  @Prop()
  sponsored: boolean;

  @Prop()
  editor: string;

  @Prop()
  excerpt: string;

  @Prop()
  go_aff: string;

  @Prop()
  content: string;

  @Prop()
  status: number;

  @Prop()
  schedule: string;

  @Prop()
  type: string;

  @Prop()
  featured_img: string;

  @Prop()
  slug: string;

  @Prop()
  id: number;

  @Prop()
  amp_html: string;

  @Prop({ type: 'Object' })
  link: Ilink;

  @Prop({ type: { type: MongooseSchema.Types.ObjectId, ref: 'user' } })
  user;
}

export const PostSchema = SchemaFactory.createForClass(Post);
export type PostDocument = Post & Document;
