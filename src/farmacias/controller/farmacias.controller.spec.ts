import { Test, TestingModule } from '@nestjs/testing';
import { FarmaciasService } from '../farmacias.service';
import { FarmaciasWithUseCaseController } from './farmacias.controller';

describe('FarmaciasWithUseCaseController', () => {
  let controller: FarmaciasWithUseCaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmaciasWithUseCaseController],
      providers: [FarmaciasService],
    }).compile();

    controller = module.get<FarmaciasWithUseCaseController>(
      FarmaciasWithUseCaseController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
