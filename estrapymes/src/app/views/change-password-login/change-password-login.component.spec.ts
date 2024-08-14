import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordLoginComponent } from './change-password-login.component';

describe('ChangePasswordLoginComponent', () => {
  let component: ChangePasswordLoginComponent;
  let fixture: ComponentFixture<ChangePasswordLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePasswordLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
