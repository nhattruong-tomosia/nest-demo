import { NestMiddleware, Injectable, HttpStatus } from '@nestjs/common'
import { UserService } from '../../modules/user/user.service';
import { Request, Response } from 'express'

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) { }

  use(req: Request, res: Response, next: Function) {
    const user = this.userService.findById(parseInt(req.params.id))
    if (!user) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .send('Unable to find the comment.');
    }
    // req.user = user
    next()
  }

}