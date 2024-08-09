import {
  Controller,
  Get,
  HttpCode,
  Post,
  Header,
  Redirect,
  Query,
  Param,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { item } from './app.controller.dto';
import { Response } from 'express';

// @Controller('cat')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('GET/cat')
  @Redirect('https://nestjs.com', 301)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('add')
  // @HttpCode(204)
  @Header('Cache-Control', 'none')
  addData() {
    return {
      statusCode: HttpCode,
      message: this.appService.addData(),
    };
  }

  // @Get('*')
  @Get('ab*cd')
  wildcard(): string {
    return this.appService.wildcard();
  }

  @Get('ang')
  @Redirect('https://v17.angular.io/api/router/Resolve', 301)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://v17.angular.io/api/router/Resolve' };
    }
  }

  @Get('app/:id')
  getParams(@Param() param: any) {
    //  return `apps query params is ${JSON.stringify(param)}`;
    return `apps query params is ${param.id}`;
  }

  @Get(':id')
  getParamsId(@Param('id') id: string) {
    return `app runs with id ${id}`;
  }

  @Post('add/item')
  // addItem(@Body() item:any){
  addItem(@Body() item: item) {
    return `received item is ${JSON.stringify(item)}`;
  }

  @Post('add/cat')
  addCat(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Post('get/res')
  getResponse(@Res() res: Response) {
    res.status(HttpStatus.OK).json({ status: 'created' });
  }

  @Get('get/add')
  getAddedData() {
    return 'data added ';
  }
}
