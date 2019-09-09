import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomloggerService } from './shared/customlogger/customlogger.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.useLogger(app.get(CustomloggerService))
  await app.listen(3000);
}
bootstrap();
