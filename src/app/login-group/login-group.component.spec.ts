import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGroupComponent } from './login-group.component';

describe('LoginGroupComponent', () => {
  let component: LoginGroupComponent;
  let fixture: ComponentFixture<LoginGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
