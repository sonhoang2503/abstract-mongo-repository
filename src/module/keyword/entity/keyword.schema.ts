import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IAlsoAsk, IKeywordRelated } from './keyword.interface';

@Schema({
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class Keyword {
  @Prop({ required: true, trim: true })
  keyword: string;

  @Prop({
    type: 'string',
    lowercase: true,
    trim: true,
  })
  keyword_slug: string;

  @Prop({
    type: 'string',
    trim: true,
    unique: true,
  })
  hash_r: string;

  @Prop({ type: 'string' })
  k_related: string;

  @Prop({ type: 'array' })
  k_related_html: IKeywordRelated[];

  @Prop({ type: Number, index: true, default: 0 })
  tracked: number;

  @Prop({
    type: [Types.ObjectId],
    //ref: TagEntity.name,
    index: true,
  })
  coupon_ids?: [Types.ObjectId];

  @Prop({
    type: [Types.ObjectId],
    //ref: TagEntity.name,
    index: true,
  })
  tag_ids?: [Types.ObjectId];

  @Prop({
    type: Types.ObjectId,
    //ref: TagEntity.name,
    index: true,
  })
  entity_id?: Types.ObjectId;

  @Prop({
    type: [Types.ObjectId],
    //ref: TagEntity.name,
    index: true,
  })
  recipe_ids?: [Types.ObjectId];

  // @Prop({
  //     type: Types.ObjectId,
  //     ref: TagEntity.name,
  //     index: true,
  // })
  // entity_id?: Types.ObjectId;

  also_ask?: { type: IAlsoAsk[] };
}

export const KeywordDatabaseName = 'Keywords';
export const KeywordSchema = SchemaFactory.createForClass(Keyword);

export type KeywordDocument = Keyword & Document;
