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
  education: string = '';
  experience: string = '';
  cover_letter: string = '';
  status: string = 'Pending'; // You can set a default value if needed
  selectedFile: File | null = null;

  // Add a property to store the uploaded resume ID
  uploadedResumeId: string | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadResume() {
    console.log('Uploading resume...');
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('resume', this.selectedFile);
    formData.append('full_name', this.full_name);
    formData.append('email', this.email);
    // ... (other form fields)

    this.http.post('http://localhost:9000/upload', formData).subscribe(
      (response: any) => {
        console.log('Response from server:', response)
        this.selectedFile = null;
        alert('Resume uploaded successfully');
        this.resetForm();
      },
      (error) => {
        console.error('Error uploading resume', error);
      }
    );
  }

  goBack() {
    location.reload();
  }
  // Add a method to reset the form
  resetForm() {
    this.full_name = '';
    this.email = '';
    this.phone = '';
    this.address = '';
    this.position = '';
    this.job_type = '';
    this.education = '';
    this.experience = '';
    this.selectedFile = null; 
    this.cover_letter = '';
    this.status = 'Pending';
  }
}
