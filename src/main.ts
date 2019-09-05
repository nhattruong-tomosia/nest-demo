import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomloggerService } from './shared/customlogger/customlogger.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();
