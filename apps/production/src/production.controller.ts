import { Controller } from '@nestjs/common';
import { ProductionService } from './production.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  @MessagePattern({ cmd: 'hello' })
  getHello(): string {
    return this.productionService.getHello();
  }
}
