import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class ResultTransform implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
  }
}