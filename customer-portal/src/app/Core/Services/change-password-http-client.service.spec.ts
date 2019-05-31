import { TestBed } from '@angular/core/testing';

import { ChangePasswordHttpClientService } from './change-password-http-client.service';

describe('ChangePasswordHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangePasswordHttpClientService = TestBed.get(ChangePasswordHttpClientService);
    expect(service).toBeTruthy();
  });
});
