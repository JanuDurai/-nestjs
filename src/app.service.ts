import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AppService implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Inside app service');
    next();
  }

  getHello(): string {
    return 'Hello World!';
  }

  addData(): string {
    return 'Data added';
  }

  wildcard(): string {
    return 'wild card route';
  }
}
