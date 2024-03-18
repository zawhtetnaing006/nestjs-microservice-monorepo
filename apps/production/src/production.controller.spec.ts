import { Test, TestingModule } from '@nestjs/testing';
import { ProductionController } from './production.controller';
import { ProductionService } from './production.service';

describe('ProductionController', () => {
  let productionController: ProductionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductionController],
      providers: [ProductionService],
    }).compile();

    productionController = app.get<ProductionController>(ProductionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productionController.getHello()).toBe('Hello World!');
    });
  });
});
