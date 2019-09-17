import { Controller, Get, Param, HttpException, HttpStatus, UseInterceptors, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { LoggingInterceptor } from '../../shared/interceptor/logger.interceptor';
import { ResultTransform } from '../../shared/interceptor/resultTransform.interceptor';
import CONSTANT from '@app/constant'

// @UseInterceptors(LoggingInterceptor)
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject(CONSTANT.RES) private readonly res: IRes
  ) { }


  // @Get()
  // @UseInterceptors(ResultTransform)
  // getAllUser() {
  //   return this.userService.findAll()
  // }


  // @Get(':id')
  // @UseInterceptors(ErrorInterceptor)
  // getUserById(@Param('id') id: string) {
  //   const userId = parseInt(id)
  //   // throw new WsException('Missing entry id.');
  //   return this.userService.findById(userId)
  // }

  @Get('error')
  async error() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get()
  async findAll() {
    const result = await this.userService.findAll()
    return this.res.success({result})
  }
  @Get('create')
  async create() {
    this.userService.create({ name: 'khoa', pass: '123' })
    return this.res.success()
  }
}
