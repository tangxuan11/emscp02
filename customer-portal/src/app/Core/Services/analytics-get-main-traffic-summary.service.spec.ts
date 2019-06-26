import { TestBed } from '@angular/core/testing';

import { AnalyticsGetMainTrafficSummaryService } from './analytics-get-main-traffic-summary.service';

describe('AnalyticsGetMainTrafficSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyticsGetMainTrafficSummaryService = TestBed.get(AnalyticsGetMainTrafficSummaryService);
    expect(service).toBeTruthy();
  });
});
