import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthenticationModule } from './api/authentication/authentication.module';
import { LoggerMiddleware } from './middleware/logger.middleware'
import { CustomloggerModule } from './shared/customlogger/customlogger.module'

@Module({
  imports: [AuthenticationModule, CustomloggerModule],
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
