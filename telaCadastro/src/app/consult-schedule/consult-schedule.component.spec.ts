import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultScheduleComponent } from './consult-schedule.component';

describe('ConsultScheduleComponent', () => {
  let component: ConsultScheduleComponent;
  let fixture: ComponentFixture<ConsultScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
