import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMeetingsComponent } from './request-meetings.component';

describe('RequestMeetingsComponent', () => {
  let component: RequestMeetingsComponent;
  let fixture: ComponentFixture<RequestMeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestMeetingsComponent]
    });
    fixture = TestBed.createComponent(RequestMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
