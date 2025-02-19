import { TestBed } from '@angular/core/testing';

import { NonSingletonService } from './non-singleton.service';

describe('NonSingletonService', () => {
  let service: NonSingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonSingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
