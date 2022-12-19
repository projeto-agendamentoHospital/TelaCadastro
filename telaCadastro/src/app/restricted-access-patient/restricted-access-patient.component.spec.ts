import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedAccessPatientComponent } from './restricted-access-patient.component';

describe('RestrictedAccessPatientComponent', () => {
  let component: RestrictedAccessPatientComponent;
  let fixture: ComponentFixture<RestrictedAccessPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedAccessPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedAccessPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
