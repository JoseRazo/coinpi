import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarEventoComponent } from './lugar-evento.component';

describe('LugarEventoComponent', () => {
  let component: LugarEventoComponent;
  let fixture: ComponentFixture<LugarEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugarEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
