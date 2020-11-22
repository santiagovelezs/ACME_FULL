import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallehabitacionComponent } from './detallehabitacion.component';

describe('DetallehabitacionComponent', () => {
  let component: DetallehabitacionComponent;
  let fixture: ComponentFixture<DetallehabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallehabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallehabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
