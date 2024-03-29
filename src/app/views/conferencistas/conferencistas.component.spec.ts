import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencistasComponent } from './conferencistas.component';

describe('ConferencistasComponent', () => {
  let component: ConferencistasComponent;
  let fixture: ComponentFixture<ConferencistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferencistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
