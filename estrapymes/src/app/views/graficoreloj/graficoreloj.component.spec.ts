import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficorelojComponent } from './graficoreloj.component';

describe('GraficorelojComponent', () => {
  let component: GraficorelojComponent;
  let fixture: ComponentFixture<GraficorelojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficorelojComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficorelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
