import { Injectable } from '@nestjs/common';



@Injectable()
export class ResponseService {
  private readonly succesMessage: String = ''

  success(payload: Object) {
    return {
      message: this.succesMessage,
      ...payload
    }
  }
}
