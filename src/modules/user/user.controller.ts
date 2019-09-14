import { Controller, Get, Param, HttpException, HttpStatus, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { LoggingInterceptor } from '../../shared/interceptor/logger.interceptor';
import { ErrorInterceptor } from '../../shared/interceptor/errors.interceptor';
import { WsException } from '@nestjs/websockets';
import { ResultTransform } from '../../shared/interceptor/resultTransform.interceptor';
import { AuthenticationService } from '../authentication/authentication.service';

@UseInterceptors(LoggingInterceptor)
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authenService: AuthenticationService) { }

  @Get()
  @UseInterceptors(ResultTransform)
  getAllUser() {
    return this.authenService.getAllUser()
    // return this.userService.findAll()
  }

  @Get(':id')
  // @UseInterceptors(ErrorInterceptor)
  getUserById(@Param('id') id: string) {
    const userId = parseInt(id)
    // throw new WsException('Missing entry id.');
    return this.userService.findById(userId)
  }

  @Get('error')
  async error() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
