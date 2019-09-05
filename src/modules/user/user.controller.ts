import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { LoggingInterceptor } from '../../shared/interceptor/logger.interceptor';
import { ErrorInterceptor } from '../../shared/interceptor/errors.interceptor';
import { WsException } from '@nestjs/websockets';
import { ResultTransform } from '../../shared/interceptor/resultTransform.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }


  @Get()
  @UseInterceptors(ResultTransform)
  getAllUser() {
    return this.userService.findAll()
  }


  @Get(':id')
  // @UseInterceptors(ErrorInterceptor)
  getUserById(@Param() id) {
    // throw new WsException('Missing entry id.');
    return this.userService.findById(id)
  }
}
