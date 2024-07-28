import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficarelojestraComponent } from './graficarelojestra.component';

describe('GraficarelojestraComponent', () => {
  let component: GraficarelojestraComponent;
  let fixture: ComponentFixture<GraficarelojestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficarelojestraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficarelojestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
