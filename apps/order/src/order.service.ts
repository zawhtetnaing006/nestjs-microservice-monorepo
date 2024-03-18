import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  getHello(): string {
    return 'This is order service.';
  }
}
