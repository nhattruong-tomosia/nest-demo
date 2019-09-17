import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { MessageModule } from './modules/message/message.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware'
import { CustomloggerModule } from './shared/customlogger/customlogger.module'
import { ResponseModule } from './shared/response/response.module';
import { FirestoreServiceModule } from '@app/firestore-service'


const PROJECT_ID = 'nest-demo-7a590'
const KEY_FILE_NAME = './nest-demo-7a590-firebase-adminsdk-16nat-84cff4b8b7.json'

@Module({
  imports: [
    CustomloggerModule,
    UserModule,
    MessageModule,
    ResponseModule,
    FirestoreServiceModule.forRoot(PROJECT_ID, KEY_FILE_NAME),
  ],
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
