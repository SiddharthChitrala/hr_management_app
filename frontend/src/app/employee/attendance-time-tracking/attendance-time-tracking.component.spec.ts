import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceTimeTrackingComponent } from './attendance-time-tracking.component';

describe('AttendanceTimeTrackingComponent', () => {
  let component: AttendanceTimeTrackingComponent;
  let fixture: ComponentFixture<AttendanceTimeTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceTimeTrackingComponent]
    });
    fixture = TestBed.createComponent(AttendanceTimeTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
