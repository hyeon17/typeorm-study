import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
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
  async patchUser(@Param('id') id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    return this.userRepository.save({
      ...user,
      title: `Updated User ${Date.now()}`,
    });
  }
}
