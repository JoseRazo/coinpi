import { TestBed } from '@angular/core/testing';

import { CronogramasService } from './cronogramas.service';

describe('CronogramasService', () => {
  let service: CronogramasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronogramasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
