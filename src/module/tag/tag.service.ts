import { Injectable } from '@nestjs/common';
import { Tag } from './entity/tag.schema';
import { TagRepository } from './tag.repository';
import { CreateTagDto, UpdateTagDto } from './entity/dto';

@Injectable()
export class TagService {
  constructor(private readonly TagRepository: TagRepository) {}

  async findAll(): Promise<Tag[]> {
    return await this.TagRepository.find({});
  }

  async findOne(id: string): Promise<Tag> {
    return await this.TagRepository.findOne({ id });
  }

  async create(data: CreateTagDto): Promise<Tag> {
    return await this.TagRepository.create(data);
  }

  async update(id: string, data: UpdateTagDto): Promise<Tag> {
    return await this.TagRepository.findOneAndUpdate({ id }, data);
  }

  async deleteOne(id: string): Promise<void> {
    return await this.TagRepository.findOneAndDelete({ id });
  }

  async deleteMany(): Promise<number> {
    return await this.TagRepository.deleteMany();
  }
}
