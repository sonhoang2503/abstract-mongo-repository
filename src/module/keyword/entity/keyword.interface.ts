import { Types } from 'mongoose';

export interface IKeywordCreate {
  keyword: string;
  tracked?: number;
}

export interface IKeywordUpdate extends IKeywordCreate {
  k_related: string;
  k_related_html: IKeywordRelated[];
  coupon_ids?: Types.ObjectId[];
  tag_ids?: Types.ObjectId[];
  entity_id?: Types.ObjectId;
  recipe_ids?: Types.ObjectId[];
  also_ask?: IAlsoAsk[];
}

export interface IKeywordFindAll {
  tracked?: number;
  slug?: string;
  hash_r?: string;
  entity_id?: string;
  tag_ids?: string[];
  recipe_ids?: string[];
  coupon_ids?: string[];
}

export interface IKeywordRelated {
  str: string;
  htm: string;
}

export interface IAlsoAsk {
  question: string;
  answer: string;
}

export interface IDownloadResponse {
  headers_type: string;
  file_path: any;
}
