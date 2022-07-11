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
import { CreateUserDto, UpdateUserDto } from './entity/dto';
import { UserService } from './user.service';

@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() data: CreateUserDto) {
    return await this.userService.create(data);
  }

  @Get('/:id')
  async findOne(@Param() id: string) {
    return await this.userService.findOne(id);
  }

  @Patch('/:id')
  async update(@Param() id: string, @Body() data: UpdateUserDto) {
    return await this.userService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param() id: string) {
    return await this.userService.deleteOne(id);
  }
}
