import { TestBed } from '@angular/core/testing';

import { ScheduleSettingsServiceService } from './schedule-settings-service.service';

describe('ScheduleSettingsServiceService', () => {
  let service: ScheduleSettingsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleSettingsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
