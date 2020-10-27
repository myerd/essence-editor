import { TestBed } from '@angular/core/testing';

import { WayofworkService } from './wayofwork.service';

describe('WayofworkService', () => {
  let service: WayofworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WayofworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
