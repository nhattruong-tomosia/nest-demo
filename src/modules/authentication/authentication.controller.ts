import { Controller, Get, Post, Req } from '@nestjs/common';
import { AuthenticationService } from './authentication.service'
import { Request } from 'express'

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('login')
  login(@Req() req: Request): Object {
    return { success: 1 }
  }
}
