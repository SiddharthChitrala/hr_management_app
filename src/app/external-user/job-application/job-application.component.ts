import { Component } from '@angular/core';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html', // Update this path accordingly
  styleUrls: ['./job-application.component.css'] // Update this path accordingly
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
  
    console.log('Submitting form');
    console.log('Form Data:', formData);
  }
  
}
