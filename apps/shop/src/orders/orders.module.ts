import { Module } from '@nestjs/common';
import { AppOrderController } from './app.order.controller';
import { AppOrderService } from './app.order.service';

@Module({
  controllers: [AppOrderController],
  providers: [AppOrderService],
})
export class OrdersModule {}
