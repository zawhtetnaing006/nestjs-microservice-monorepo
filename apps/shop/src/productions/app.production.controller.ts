import { Controller, Get } from '@nestjs/common';
import { AppProductionService } from './app.production.service';

@Controller('production')
export class AppProductionController {
  constructor(private readonly appService: AppProductionService) {}

  @Get()
  getProduction() {
    return this.appService.getProduction();
  }
}
