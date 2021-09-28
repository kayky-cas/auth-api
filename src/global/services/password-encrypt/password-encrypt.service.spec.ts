import { Test, TestingModule } from '@nestjs/testing';
import { PasswordEncryptService } from './password-encrypt.service';

describe('PasswordEncryptService', () => {
  let service: PasswordEncryptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordEncryptService],
    }).compile();

    service = module.get<PasswordEncryptService>(PasswordEncryptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
