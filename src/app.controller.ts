import { Controller, Get, HttpException } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getTest(): string {
    console.log('app controller is called');
    throw new HttpException('err 421', 421);
  }
}
