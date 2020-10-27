import { TestBed } from '@angular/core/testing';

import { RequirementsdataService } from './requirementsdata.service';

describe('RequirementsdataService', () => {
  let service: RequirementsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequirementsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
