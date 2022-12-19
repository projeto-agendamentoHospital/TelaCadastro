import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedAccessProfessionalComponent } from './restricted-access-professional.component';

describe('RestrictedAccessProfessionalComponent', () => {
  let component: RestrictedAccessProfessionalComponent;
  let fixture: ComponentFixture<RestrictedAccessProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedAccessProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedAccessProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
