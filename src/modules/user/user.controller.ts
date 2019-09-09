import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getAllUser() {
    return this.userService.findAll()
  }

  @Get('id')
  getUserById(@Param() id) {
    return this.userService.findById(id)
  }

  @Get('error')
  async error() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
