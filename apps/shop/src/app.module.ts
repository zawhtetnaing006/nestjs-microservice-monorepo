import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { ProductionsModule } from './productions/productions.module';

@Module({
  imports: [OrdersModule, ProductionsModule],
})
export class AppModule {}
