import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarficdescargasComponent } from './garficdescargas.component';

describe('GarficdescargasComponent', () => {
  let component: GarficdescargasComponent;
  let fixture: ComponentFixture<GarficdescargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarficdescargasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarficdescargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
