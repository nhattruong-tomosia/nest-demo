import { Test, TestingModule } from '@nestjs/testing';
import { FirestoreServiceService } from './firestore-service.service';

describe('FirestoreServiceService', () => {
  let service: FirestoreServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirestoreServiceService],
    }).compile();

    service = module.get<FirestoreServiceService>(FirestoreServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
