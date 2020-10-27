import { TestBed } from '@angular/core/testing';

import { OpportunitydataService } from './opportunitydata.service';

describe('OpportunitydataService', () => {
  let service: OpportunitydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpportunitydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
