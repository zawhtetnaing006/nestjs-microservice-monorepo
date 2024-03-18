import { NestFactory } from '@nestjs/core';
import { ProductionModule } from './production.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProductionModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 234,
    },
  });
  await app.listen();
}
bootstrap();
