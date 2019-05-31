import { TestBed } from '@angular/core/testing';

import { ForgotPasswordHttpClientService } from './forgot-password-http-client.service';

describe('ForgotPasswordHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForgotPasswordHttpClientService = TestBed.get(ForgotPasswordHttpClientService);
    expect(service).toBeTruthy();
  });
});
