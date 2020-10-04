import { TestBed } from '@angular/core/testing';

import { EndeavorService } from './endeavor.service';

describe('EndeavorService', () => {
  let service: EndeavorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndeavorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
