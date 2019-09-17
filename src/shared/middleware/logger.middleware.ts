import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express'
import { CustomLoggerService } from '../customlogger/customlogger.service'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: CustomLoggerService) { }

  use(req: Request, res: Response, next: () => void) {
    this.logger.log('')
    this.logger.log(`${req.method} ${req.originalUrl}`, `request`)
    this.logger.log(`${JSON.stringify(req.query)}`, `query`)
    this.logger.log(`${JSON.stringify(req.body)}`, `body`)
    next();
  }
}
