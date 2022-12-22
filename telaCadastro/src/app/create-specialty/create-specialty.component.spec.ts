import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpecialtyComponent } from './create-specialty.component';

describe('CreateSpecialtyComponent', () => {
  let component: CreateSpecialtyComponent;
  let fixture: ComponentFixture<CreateSpecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSpecialtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
