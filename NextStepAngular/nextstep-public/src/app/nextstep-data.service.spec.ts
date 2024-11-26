import { TestBed } from '@angular/core/testing';

import { NextstepDataService } from './nextstep-data.service';

describe('NextstepDataService', () => {
  let service: NextstepDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextstepDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
