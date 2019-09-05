import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {

  login(emailOrUsername: String, password: String) {
    return `${Math.floor(Math.random() * 10000)}${emailOrUsername}`
  }
}
