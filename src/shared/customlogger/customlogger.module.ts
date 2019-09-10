import { Module, Global } from '@nestjs/common';
import { CustomloggerService } from './customlogger.service';

@Global()
@Module({
  providers: [CustomloggerService],
  exports: [CustomloggerService]
})
export class CustomloggerModule {}
