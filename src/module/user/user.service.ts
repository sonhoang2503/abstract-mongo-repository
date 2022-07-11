import { Injectable } from '@nestjs/common';
import { User } from './entity/user.schema';
import { UserRepository } from './user.repository';
import { CreateUserDto, UpdateUserDto } from './entity/dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({});
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({ id });
  }

  async create(data: CreateUserDto): Promise<User> {
    return await this.userRepository.create(data);
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    return await this.userRepository.findOneAndUpdate({ id }, data);
  }

  async deleteOne(id: string): Promise<void> {
    return await this.userRepository.findOneAndDelete({ id });
  }

  async deleteMany(): Promise<number> {
    return await this.userRepository.deleteMany();
  }
}
