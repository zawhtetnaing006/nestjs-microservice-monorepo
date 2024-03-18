import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppProductionService {
  private client;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'production',
        port: 234,
      },
    });
  }

  getProduction() {
    return this.client.send({ cmd: 'hello' }, 2);
  }
}
