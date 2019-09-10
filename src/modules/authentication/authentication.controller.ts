import { Controller, Get, Post, Req } from '@nestjs/common';
import { AuthenticationService } from './authentication.service'
import { Request } from 'express'

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('login')
  login(@Req() req: Request): Object {
    this.authenticationService.login('khoa', '123');
    return { success: 1 }
  }

  @Post('signup')
  signUp(@Req() req: Request): Object {
    this.authenticationService.signUp()
    return { success: 1 }
  }
}
