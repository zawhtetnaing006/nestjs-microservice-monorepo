import { Module } from '@nestjs/common';
import { AppProductionController } from './app.production.controller';
import { AppProductionService } from './app.production.service';

@Module({
  controllers: [AppProductionController],
  providers: [AppProductionService],
})
export class ProductionsModule {}
