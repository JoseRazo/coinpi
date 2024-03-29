import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInstructorComponent } from './detalle-instructor.component';

describe('DetalleInstructorComponent', () => {
  let component: DetalleInstructorComponent;
  let fixture: ComponentFixture<DetalleInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
