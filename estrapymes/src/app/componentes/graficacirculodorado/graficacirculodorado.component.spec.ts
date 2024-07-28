import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraficacirculodoradoComponent } from './graficacirculodorado.component';

describe('GraficacirculodoradoComponent', () => {
  let component: GraficacirculodoradoComponent;
  let fixture: ComponentFixture<GraficacirculodoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficacirculodoradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficacirculodoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
