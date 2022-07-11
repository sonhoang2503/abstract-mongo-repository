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
import { CreateKeywordTagDto, UpdateKeywordTagDto } from './entity/dto';
import { KeywordTagService } from './keyword_tag.service';
import { Permission } from '../../common/decorator/auth.decorator';
import { Role } from '../../common/enum/role.enum';

@Controller('keyword_tag')
export class KeywordTagController {
  constructor(private readonly KeywordServiceTag: KeywordTagService) {}

  // @Permission(Role.Admin)
  @Get()
  async findAll() {
    return await this.KeywordServiceTag.findAll();
  }

  @Post()
  async create(@Body() data: CreateKeywordTagDto) {
    return await this.KeywordServiceTag.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this.KeywordServiceTag.findOne(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: UpdateKeywordTagDto) {
    return await this.KeywordServiceTag.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this.KeywordServiceTag.deleteOne(id);
  }
}
