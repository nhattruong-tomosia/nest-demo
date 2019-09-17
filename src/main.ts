import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLoggerService } from './shared/customlogger/customlogger.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: new CustomLoggerService() });
  await app.listen(3000);
}
bootstrap();
