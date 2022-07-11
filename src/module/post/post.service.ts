import { Injectable } from '@nestjs/common';
import { Post } from './entity/post.schema';
import { PostRepository } from './post.repository';
import { CreatePostDto, UpdatePostDto } from './entity/dto/index';

@Injectable()
export class PostService {
  constructor(private readonly PostRepository: PostRepository) {}

  async findAll(): Promise<Post[]> {
    return await this.PostRepository.find({});
  }

  async findOne(id: string): Promise<Post> {
    return await this.PostRepository.findOne({ id });
  }

  async create(data: CreatePostDto): Promise<Post> {
    return await this.PostRepository.create(data);
  }

  async update(id: string, data: UpdatePostDto): Promise<Post> {
    return await this.PostRepository.findOneAndUpdate({ id }, data);
  }

  async deleteOne(id: string): Promise<void> {
    return await this.PostRepository.findOneAndDelete({ id });
  }

  async deleteMany(): Promise<number> {
    return await this.PostRepository.deleteMany();
  }
}
