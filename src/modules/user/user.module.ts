import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserMiddleware } from '../../shared/middleware/user.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes({
        path: 'users/:id',
        method: RequestMethod.ALL
      })
  }
}
