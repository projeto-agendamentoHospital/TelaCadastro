import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedAccessConsultComponent } from './restricted-access-consult.component';

describe('RestrictedAccessConsultComponent', () => {
  let component: RestrictedAccessConsultComponent;
  let fixture: ComponentFixture<RestrictedAccessConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictedAccessConsultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedAccessConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
