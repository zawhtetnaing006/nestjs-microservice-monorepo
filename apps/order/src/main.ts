import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(OrderModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 1234,
    },
  });
  await app.listen();
}
bootstrap();
