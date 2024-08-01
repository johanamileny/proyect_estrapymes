import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuAdministradorComponent } from './nav-menu-administrador.component';

describe('NavMenuAdministradorComponent', () => {
  let component: NavMenuAdministradorComponent;
  let fixture: ComponentFixture<NavMenuAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuAdministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
