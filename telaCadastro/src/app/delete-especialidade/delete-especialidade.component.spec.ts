import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEspecialidadeComponent } from './delete-especialidade.component';

describe('DeleteEspecialidadeComponent', () => {
  let component: DeleteEspecialidadeComponent;
  let fixture: ComponentFixture<DeleteEspecialidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEspecialidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
