import { Module, NestModule, MiddlewareConsumer, RequestMethod, Inject } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserMiddleware } from '../../shared/middleware/user.middleware';
import { FirestoreServiceModule } from '@app/firestore-service'
import CONSTANT from '@app/constant'


@Module({
  imports: [FirestoreServiceModule.forFeature<User>(CONSTANT.COLLECTION_USERS)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
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
