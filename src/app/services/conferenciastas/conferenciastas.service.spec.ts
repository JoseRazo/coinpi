import { TestBed } from '@angular/core/testing';

import { ConferenciastasService } from './conferenciastas.service';

describe('ConferenciastasService', () => {
  let service: ConferenciastasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConferenciastasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
