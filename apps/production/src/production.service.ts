import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductionService {
  getHello(): string {
    return 'This is production service';
  }
}
