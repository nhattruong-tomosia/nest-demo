import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserModule } from './modules/user/user.module';
import { MessageModule } from './modules/message/message.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware'
import { CustomloggerModule } from './shared/customlogger/customlogger.module'
import { ResponseModule } from './shared/response/response.module';
import { FirestoreModule } from './shared/firestore/firestore.module';


@Module({
  imports: [AuthenticationModule, CustomloggerModule, UserModule, MessageModule, ResponseModule, FirestoreModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/')
  }
}
