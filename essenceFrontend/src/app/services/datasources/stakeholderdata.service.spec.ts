import { TestBed } from '@angular/core/testing';

import { StakeholderdataService } from './stakeholderdata.service';

describe('StakeholderdataService', () => {
  let service: StakeholderdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StakeholderdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
