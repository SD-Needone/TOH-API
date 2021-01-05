import { HeroesService } from './heroes.service';
import { Test, TestingModule } from '@nestjs/testing';
import { HeroesController } from './heroes.controller';

describe('HeroesController', () => {
  let controller: HeroesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroesController],
      providers: [HeroesService]
    }).compile();

    controller = module.get<HeroesController>(HeroesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
