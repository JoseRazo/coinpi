import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCulturalComponent } from './evento-cultural.component';

describe('EventoCulturalComponent', () => {
  let component: EventoCulturalComponent;
  let fixture: ComponentFixture<EventoCulturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoCulturalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoCulturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
