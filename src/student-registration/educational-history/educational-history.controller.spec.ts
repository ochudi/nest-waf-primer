import { Test, TestingModule } from '@nestjs/testing';
import { EducationalHistoryController } from './educational-history.controller';
import { EducationalHistoryService } from './educational-history.service';

describe('EducationalHistoryController', () => {
  let controller: EducationalHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationalHistoryController],
      providers: [EducationalHistoryService],
    }).compile();

    controller = module.get<EducationalHistoryController>(EducationalHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
