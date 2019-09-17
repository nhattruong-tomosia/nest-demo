import { Injectable, Logger } from '@nestjs/common';
import * as winston from 'winston'
// import * as path from 'path'

@Injectable()
export class CustomLoggerService extends Logger {
  private logger: winston.Logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.colorize(),
      // winston.format.label({ label: 'custom label' }),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf(({ timestamp, level, message, stack, ...rest }) => {
        const splat = rest[Symbol.for('splat') as any]
        const tags = splat
          .filter((item: any) => typeof item === 'string')
          .map((item: string) => `[${item}]`)
          .join(' ')

        let output = `[${timestamp}] [${level}] ${tags}`
        if(stack) {
          return `${output} ${stack}`;
        } else {
          return `${output} ${message}`;
        }
        // return `${timestamp} [${label}] ${level}: ${message}`;
      }),
    ),
    transports: [new winston.transports.Console({})]
  })


  log(message: any, context?: string | Object) {
    this.logger.info(message, context)
  }
  info(message) {
    this.logger.info(message)
  }
  error(message: any, trace?: string, context?: string) {
    this.logger.error(message, trace, context)
  }
  warn(message: any, context?: string) {
    this.logger.warn(message, context)
  }
  debug(message: any, context?: string) {
    this.logger.debug(message, context)
  }
  verbose(message: any, context?: string) {
    this.logger.verbose(message, context)
  }
}
