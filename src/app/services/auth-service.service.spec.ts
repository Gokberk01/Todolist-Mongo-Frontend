import { TestBed } from '@angular/core/testing';

import { authServiceService } from './auth-service.service';

describe('RegisterServiceService', () => {
  let service: authServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(authServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
