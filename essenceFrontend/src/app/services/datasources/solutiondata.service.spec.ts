import { TestBed } from '@angular/core/testing';

import { SolutiondataService } from './solutiondata.service';

describe('SolutiondataService', () => {
  let service: SolutiondataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutiondataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
