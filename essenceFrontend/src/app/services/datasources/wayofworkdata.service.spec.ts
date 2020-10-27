import { TestBed } from '@angular/core/testing';

import { WayofworkdataService } from './wayofworkdata.service';

describe('WayofworkdataService', () => {
  let service: WayofworkdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WayofworkdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
