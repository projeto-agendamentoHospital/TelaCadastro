import { TestBed } from '@angular/core/testing';

import { ScheduleProfissionalServiceService } from './schedule-professional-service.service';

describe('ScheduleProfissionalServiceService', () => {
  let service: ScheduleProfissionalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleProfissionalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
