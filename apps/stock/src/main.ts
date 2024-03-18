import { NestFactory } from '@nestjs/core';
import { StockModule } from './stock.module';

async function bootstrap() {
  const app = await NestFactory.create(StockModule);
  await app.listen(3000);
}
bootstrap();
