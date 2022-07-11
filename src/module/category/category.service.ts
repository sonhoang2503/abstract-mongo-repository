import { Injectable } from '@nestjs/common';
import { Category } from './entity/category.schema';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto, UpdateCategoryDto } from './entity/dto';

@Injectable()
export class CategoryService {
  constructor(private readonly CategoryRepository: CategoryRepository) {}

  async findAll(): Promise<Category[]> {
    return await this.CategoryRepository.find({});
  }

  async findOne(id: string): Promise<Category> {
    return await this.CategoryRepository.findOne({ id });
  }

  async create(data: CreateCategoryDto): Promise<Category> {
    return await this.CategoryRepository.create(data);
  }

  async update(id: string, data: UpdateCategoryDto): Promise<Category> {
    return await this.CategoryRepository.findOneAndUpdate({ id }, data);
  }

  async deleteOne(id: string): Promise<void> {
    return await this.CategoryRepository.findOneAndDelete({ id });
  }

  async deleteMany(): Promise<number> {
    return await this.CategoryRepository.deleteMany();
  }
}
