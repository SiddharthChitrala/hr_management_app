import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attendance-time-tracking',
  templateUrl: './attendance-time-tracking.component.html',
  styleUrls: ['./attendance-time-tracking.component.css']
})
export class AttendanceTimeTrackingComponent {

  constructor(private http: HttpClient) {}

  Name: string="";
  Email: string="";
  Date: string="";
  Time: string="";


  goBack() {
    window.location.reload();
  }

  onSubmit() {
    const formData = {
      Name: this.Name,
      Email: this.Email,
      Date: this.Date,
      Time: this.Time      
    };
    console.log(formData);
    this.http.post<any>('http://localhost:9000/create', formData).subscribe(
      (response) => {
        console.log('Attendance submitted successfull...', response.message);
      },
      (error) => {
        console.error('Error submitting attendance..', error);
      }
    );
   }

   
}
