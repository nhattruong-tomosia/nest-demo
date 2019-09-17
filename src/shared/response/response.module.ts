import { Module, Global, Provider } from '@nestjs/common';
import { ResponseService } from './response.service';
import CONSTANT from '@app/constant'

const provide: Provider = {
  provide: CONSTANT.RES,
  useClass: ResponseService
}

@Global()
@Module({
  providers: [provide],
  exports: [provide]
})
export class ResponseModule {}
