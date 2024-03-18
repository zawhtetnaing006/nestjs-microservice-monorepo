import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'hello' })
  getHello(): string {
    return this.orderService.getHello();
  }
}
