import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class KeywordTag {
  @Prop({ type: { type: MongooseSchema.Types.ObjectId, ref: 'keywords' } })
  keyword_id;

  @Prop({ type: { type: MongooseSchema.Types.ObjectId, ref: 'tag' } })
  tag_id;
}

export const KeywordTagSchema = SchemaFactory.createForClass(KeywordTag);
export type KeywordTagDocument = KeywordTag & Document;
