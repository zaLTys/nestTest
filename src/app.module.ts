import { Module } from '@nestjs/common';
import { AppController, CatsController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
