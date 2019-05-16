import { TestBed } from '@angular/core/testing';

import { LogInStateService } from './log-in-state.service';

describe('LogInStateService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: LogInStateService = TestBed.get(LogInStateService);
        expect(service).toBeTruthy();
    });
});
