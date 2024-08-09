import { Module } from '@nestjs/common';
import { RestApiService } from './rest-api.service';
import { RestApiController } from './rest-api.controller';

@Module({
  controllers: [RestApiController],
  providers: [RestApiService],
})
export class RestApiModule {}
