import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficBowmanComponent } from './grafic-bowman.component';

describe('GraficBowmanComponent', () => {
  let component: GraficBowmanComponent;
  let fixture: ComponentFixture<GraficBowmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficBowmanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficBowmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
