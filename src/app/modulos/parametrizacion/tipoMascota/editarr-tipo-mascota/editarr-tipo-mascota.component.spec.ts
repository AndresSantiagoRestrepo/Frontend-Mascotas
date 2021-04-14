import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrTipoMascotaComponent } from './editarr-tipo-mascota.component';

describe('EditarrTipoMascotaComponent', () => {
  let component: EditarrTipoMascotaComponent;
  let fixture: ComponentFixture<EditarrTipoMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarrTipoMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarrTipoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
