import { TestBed } from '@angular/core/testing';

import { EmsInterfacesService } from './ems-interfaces.service';

describe('EmsInterfacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmsInterfacesService = TestBed.get(EmsInterfacesService);
    expect(service).toBeTruthy();
  });
});
