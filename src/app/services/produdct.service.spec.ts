import { TestBed } from '@angular/core/testing';

import { ProdudctService } from './produdct.service';

describe('ProdudctService', () => {
  let service: ProdudctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdudctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
