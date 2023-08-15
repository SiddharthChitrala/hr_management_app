import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAuthComponent } from './employee-auth.component';

describe('EmployeeAuthComponent', () => {
  let component: EmployeeAuthComponent;
  let fixture: ComponentFixture<EmployeeAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAuthComponent]
    });
    fixture = TestBed.createComponent(EmployeeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
