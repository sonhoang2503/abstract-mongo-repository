import { Injectable } from '@nestjs/common';
import { KeywordTag } from './entity/keyword_tag.schema';
import { KeywordTagRepository } from './keyword_tag.repository';
import { CreateKeywordTagDto, UpdateKeywordTagDto } from './entity/dto';

@Injectable()
export class KeywordTagService {
  constructor(private readonly KeywordTagRepository: KeywordTagRepository) {}

  async findAll(): Promise<KeywordTag[]> {
    return await this.KeywordTagRepository.find({});
  }

  async findOne(id: string): Promise<KeywordTag> {
    return await this.KeywordTagRepository.findOne({ id });
  }

  async create(data: CreateKeywordTagDto): Promise<KeywordTag> {
    return await this.KeywordTagRepository.create(data);
  }

  async update(id: string, data: UpdateKeywordTagDto): Promise<KeywordTag> {
    return await this.KeywordTagRepository.findOneAndUpdate({ id }, data);
  }

  async deleteOne(id: string): Promise<void> {
    return await this.KeywordTagRepository.findOneAndDelete({ id });
  }

  async deleteMany(): Promise<number> {
    return await this.KeywordTagRepository.deleteMany();
  }
}
