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
  resume: File | null = null; // Use the File type for the resume
  education: string = '';
  experience: string = '';
  cover_letter: string = '';
  status: string = 'Pending';

  constructor(private http: HttpClient) {}

  goBack() {
    window.location.reload();
  }  

  onFileSelected(event: any) {
    this.resume = event.target.files[0];
    console.log('Selected file:', this.resume);
  }
  
  

  submitForm() {
    const formData = new FormData();
    formData.append('full_name', this.full_name);
    formData.append('email', this.email);
    formData.append('phone', this.phone);
    formData.append('address', this.address);
    formData.append('position', this.position);
    formData.append('job_type', this.job_type);
    if (this.resume) {
      formData.append('resume', this.resume, this.resume.name);
    }
    
    formData.append('education', this.education);
    formData.append('experience', this.experience);
    formData.append('cover_letter', this.cover_letter);
    formData.append('status', this.status);

    this.http.post<any>('http://localhost:9000/create/job', formData).subscribe(
      (response) => {
        console.log('Application submitted successfully:', response.message);
        alert("Applied Successfully");
        window.location.reload();
      },
      (error) => {
        console.error('Error submitting application:', error);
      }
    );
  }
}
