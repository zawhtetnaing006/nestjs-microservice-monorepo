import { Module } from '@nestjs/common';
import { ProductionController } from './production.controller';
import { ProductionService } from './production.service';

@Module({
  imports: [],
  controllers: [ProductionController],
  providers: [ProductionService],
})
export class ProductionModule {}
