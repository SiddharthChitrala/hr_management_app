import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDevelopmentComponent } from './training-development.component';

describe('TrainingDevelopmentComponent', () => {
  let component: TrainingDevelopmentComponent;
  let fixture: ComponentFixture<TrainingDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingDevelopmentComponent]
    });
    fixture = TestBed.createComponent(TrainingDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
