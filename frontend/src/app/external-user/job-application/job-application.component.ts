// job-application.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent {
  full_name: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  position: string = '';
  job_type: string = '';
  resume: any; // You might need to adjust the type based on your requirements
  education: string = '';
  experience: string = '';
  cover_letter: string = '';
  status: string = 'Pending';

  constructor(private http: HttpClient) {}

  goBack() {
    window.location.reload();
  }  

  submitForm() {
    const formData = {
      full_name: this.full_name,
      email: this.email,
      phone: this.phone,
      address: this.address,
      position: this.position,
      job_type: this.job_type,
      resume: this.resume,
      education: this.education,
      experience: this.experience,
      cover_letter: this.cover_letter,
      status: this.status
    };
  
    this.http.post<any>('http://localhost:9000/create/job', formData).subscribe(
      (response) => {
        console.log('Application submitted successfully:', response.message);
      },
      (error) => {
        console.error('Error submitting application:', error);
      }
    );
  }
}
