import { Module } from '@nestjs/common';
import { CustomloggerService } from './customlogger.service';

@Module({
  providers: [CustomloggerService],
  exports: [CustomloggerService]
})
export class CustomloggerModule {}
