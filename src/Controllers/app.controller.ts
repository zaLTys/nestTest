import { Controller, Get } from '@nestjs/common';
import { AppService } from '../Services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string[] {
    return this.appService.getCats();
  }
}
