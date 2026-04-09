import { Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './entities/user.entity';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  @Post('users')
  createUser() {
    return this.userRepository.save({
      title: `User ${Date.now()}`,
    });
  }

  @Get('users')
  getUsers() {
    return this.userRepository.find();
  }

  @Patch('users/:id')
}
