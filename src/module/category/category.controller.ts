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
import { CreateCategoryDto, UpdateCategoryDto } from './entity/dto';
import { CategoryService } from './category.service';
// import { JwtAuthGuard } from '../auth/guard/jwt.guard';
import { Permission } from '../../common/decorator/auth.decorator';
import { Role } from '../../common/enum/role.enum';

@Controller('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // @UseGuards(JwtAuthGuard)
  @Permission(Role.Admin)
  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Post()
  async create(@Body() data: CreateCategoryDto) {
    return await this.categoryService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this.categoryService.findOne(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: UpdateCategoryDto) {
    return await this.categoryService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this.categoryService.deleteOne(id);
  }
}
