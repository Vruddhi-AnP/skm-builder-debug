import { Test, TestingModule } from '@nestjs/testing';
import { FounderController } from './founder.controller';

describe('FounderController', () => {
  let controller: FounderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FounderController],
    }).compile();

    controller = module.get<FounderController>(FounderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
