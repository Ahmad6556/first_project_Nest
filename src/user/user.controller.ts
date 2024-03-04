import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class UserController {
  @Get()
  findAllUsers(): string[] {
    return ['Ahmad', 'mohammed'];
  }

  @Post()
  createUser(): string {
    return 'create new user';
  }
}
