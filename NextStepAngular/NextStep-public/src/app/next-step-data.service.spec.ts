import { TestBed } from '@angular/core/testing';

import { NextStepDataService } from './next-step-data.service';

describe('NextStepDataService', () => {
  let service: NextStepDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextStepDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
