import { Controller, Get } from '@nestjs/common';
import { AppOrderService } from './app.order.service';

@Controller('order')
export class AppOrderController {
  constructor(private readonly appService: AppOrderService) {}

  @Get()
  getOrder() {
    return this.appService.getOrder();
  }
}
