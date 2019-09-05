import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserModule } from './modules/user/user.module';
import { MessageModule } from './modules/message/message.module';
import { LoggerMiddleware } from './middleware/logger.middleware'
import { CustomloggerModule } from './shared/customlogger/customlogger.module'


@Module({
  imports: [AuthenticationModule, CustomloggerModule, UserModule, MessageModule],
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
