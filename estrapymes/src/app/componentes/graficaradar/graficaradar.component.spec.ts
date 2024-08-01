import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaradarComponent } from './graficaradar.component';

describe('GraficaradarComponent', () => {
  let component: GraficaradarComponent;
  let fixture: ComponentFixture<GraficaradarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaradarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaradarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
