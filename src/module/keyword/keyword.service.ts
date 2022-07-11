import { Injectable } from '@nestjs/common';
import { Keyword } from './entity/Keyword.schema';
import { KeywordRepository } from './keyword.repository';
import { CreateKeywordDto, UpdateKeywordDto } from './entity/dto';

@Injectable()
export class KeywordService {
  constructor(private readonly KeywordRepository: KeywordRepository) {}

  async findAll(): Promise<Keyword[]> {
    return await this.KeywordRepository.find({});
  }

  async findOne(id: string): Promise<Keyword> {
    return await this.KeywordRepository.findOne({ id });
  }

  async create(data: CreateKeywordDto): Promise<Keyword> {
    return await this.KeywordRepository.create(data);
  }

  async update(id: string, data: UpdateKeywordDto): Promise<Keyword> {
    return await this.KeywordRepository.findOneAndUpdate({ id }, data);
  }

  async deleteOne(id: string): Promise<void> {
    return await this.KeywordRepository.findOneAndDelete({ id });
  }

  async deleteMany(): Promise<number> {
    return await this.KeywordRepository.deleteMany();
  }
}
