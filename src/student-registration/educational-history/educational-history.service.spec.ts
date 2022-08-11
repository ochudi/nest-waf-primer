import { Test, TestingModule } from '@nestjs/testing';
import { EducationalHistoryService } from './educational-history.service';

describe('EducationalHistoryService', () => {
  let service: EducationalHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationalHistoryService],
    }).compile();

    service = module.get<EducationalHistoryService>(EducationalHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
