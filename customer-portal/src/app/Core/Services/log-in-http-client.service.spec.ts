import { TestBed } from '@angular/core/testing';

import { LogInHttpClientService } from './log-in-http-client.service';

describe('LogInHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogInHttpClientService = TestBed.get(LogInHttpClientService);
    expect(service).toBeTruthy();
  });
});
