import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':email')
  async findByEmail(@Param('email') email: string) {
    // return this.usersService.findByEmail(email);
    return { message: `User with email: ${email}` };
  }
}
