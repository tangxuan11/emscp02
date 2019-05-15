import { TestBed } from '@angular/core/testing';

import { NavBarDataService } from './nav-bar-data.service';

describe('NavBarDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavBarDataService = TestBed.get(NavBarDataService);
    expect(service).toBeTruthy();
  });
});
