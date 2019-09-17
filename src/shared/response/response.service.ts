import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';


@Injectable()
export class ResponseService implements IRes {
  private readonly successStatus: Boolean = true
  private readonly succesMessage: String = ''
  private readonly failStatus: Boolean = false
  private readonly failMessage: String = ''

  success<T>(payload?: T) {
    return {
      success: this.successStatus,
      message: this.succesMessage,
      ...payload
    }
  }

  error(payload?: Object) {
    throw new HttpException({
      success: this.failStatus,
      message: this.failMessage,
      ...payload,
    }, HttpStatus.BAD_REQUEST);
  }

  internalServer(payload?: Object) {
    throw new HttpException({
      success: this.failStatus,
      message: this.failMessage,
      ...payload,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
