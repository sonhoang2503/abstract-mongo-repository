import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTagDto, UpdateTagDto } from './entity/dto';
import { TagService } from './tag.service';
import { Permission } from '../../common/decorator/auth.decorator';
import { Role } from '../../common/enum/role.enum';

@Controller('tag')
export class TagController {
  constructor(private readonly TagService: TagService) {}

  // @Permission(Role.Admin)
  @Get()
  async findAll() {
    return await this.TagService.findAll();
  }

  @Post()
  async create(@Body() data: CreateTagDto) {
    return await this.TagService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this.TagService.findOne(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: UpdateTagDto) {
    return await this.TagService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this.TagService.deleteOne(id);
  }
}
