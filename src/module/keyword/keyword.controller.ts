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
import { CreateKeywordDto, UpdateKeywordDto } from './entity/dto';
import { KeywordService } from './keyword.service';
import { Permission } from '../../common/decorator/auth.decorator';
import { Role } from '../../common/enum/role.enum';

@Controller('keyword')
export class KeywordController {
  constructor(private readonly KeywordService: KeywordService) {}

  // @Permission(Role.Admin)
  @Get()
  async findAll() {
    return await this.KeywordService.findAll();
  }

  @Post()
  async create(@Body() data: CreateKeywordDto) {
    return await this.KeywordService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this.KeywordService.findOne(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: UpdateKeywordDto) {
    return await this.KeywordService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this.KeywordService.deleteOne(id);
  }
}
