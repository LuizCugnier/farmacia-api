import { Test, TestingModule } from '@nestjs/testing';
import { RemediosController } from './remedios.controller';

describe('RemediosController', () => {
  let controller: RemediosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemediosController],
    }).compile();

    controller = module.get<RemediosController>(RemediosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
