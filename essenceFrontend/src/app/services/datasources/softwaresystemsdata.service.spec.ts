import { TestBed } from '@angular/core/testing';

import { SoftwaresystemsdataService } from './softwaresystemsdata.service';

describe('SoftwaresystemsdataService', () => {
  let service: SoftwaresystemsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwaresystemsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
