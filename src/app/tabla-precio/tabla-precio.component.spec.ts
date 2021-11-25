import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPrecioComponent } from './tabla-precio.component';

describe('TablaPrecioComponent', () => {
  let component: TablaPrecioComponent;
  let fixture: ComponentFixture<TablaPrecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPrecioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
