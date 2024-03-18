import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppOrderService {
  private client;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'order',
        port: 1234,
      },
    });
  }

  getOrder() {
    return this.client.send({ cmd: 'hello' }, 1);
  }
}
