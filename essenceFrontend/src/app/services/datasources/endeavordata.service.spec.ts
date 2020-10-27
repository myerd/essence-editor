import { TestBed } from '@angular/core/testing';

import { EndeavordataService } from './endeavordata.service';

describe('EndeavordataService', () => {
  let service: EndeavordataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndeavordataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
