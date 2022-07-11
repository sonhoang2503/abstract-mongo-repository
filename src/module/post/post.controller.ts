import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './entity/dto';
import { PostService } from './post.service';

@Controller('Post')
export class PostController {
  constructor(private readonly PostService: PostService) {}

  @Get()
  async findAll() {
    return await this.PostService.findAll();
  }

  @Post()
  async create(@Body() data: CreatePostDto) {
    return await this.PostService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this.PostService.findOne(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: UpdatePostDto) {
    return await this.PostService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this.PostService.deleteOne(id);
  }
}
