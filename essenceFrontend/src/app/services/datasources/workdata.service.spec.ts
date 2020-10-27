import { TestBed } from '@angular/core/testing';

import { WorkdataService } from './workdata.service';

describe('WorkdataService', () => {
  let service: WorkdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
