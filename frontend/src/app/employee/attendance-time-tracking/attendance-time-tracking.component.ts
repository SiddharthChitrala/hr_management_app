import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendance-time-tracking',
  templateUrl: './attendance-time-tracking.component.html',
  styleUrls: ['./attendance-time-tracking.component.css']
})
export class AttendanceTimeTrackingComponent {
  attendanceForm: FormGroup;
  goBack() {
    window.location.reload();
  }  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.attendanceForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  submitAttendance() {
    if (this.attendanceForm.valid) {
      const attendanceData = this.attendanceForm.value;
      
      this.http.post('/api/attendance', attendanceData).subscribe(response => {
        console.log('Attendance saved:', response);
        this.attendanceForm.reset();
      }, error => {
        console.error('Error saving attendance:', error);
      });
    }
  }
}
