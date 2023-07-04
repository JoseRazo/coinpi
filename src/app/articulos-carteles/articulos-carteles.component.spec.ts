import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosCartelesComponent } from './articulos-carteles.component';

describe('ArticulosCartelesComponent', () => {
  let component: ArticulosCartelesComponent;
  let fixture: ComponentFixture<ArticulosCartelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosCartelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosCartelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
