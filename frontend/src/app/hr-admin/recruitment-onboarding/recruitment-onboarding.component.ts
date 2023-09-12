import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recruitment-onboarding',
  templateUrl: './recruitment-onboarding.component.html',
  styleUrls: ['./recruitment-onboarding.component.css']
})
export class RecruitmentOnboardingComponent {
  Details: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllDetails();
  }

  getAllDetails() {
    this.http.get("http://localhost:9000/get/job").subscribe(
      (resultData: any) => {
        console.log(resultData);
        this.Details = resultData.data;
      },
      (error) => {
        console.error("An error occurred:", error);
      }
    );
  }

  downloadResume(id: string, fullName: string) {
    // Replace 'your_backend_url' with the actual URL of your backend server
    const downloadUrl = `http://localhost:9000/download/${id}`;
  
    this.http.get(downloadUrl, { responseType: 'blob' }).subscribe(
      (data: Blob) => {
        if (data.size > 0) {
          const blob = new Blob([data], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
  
          // Open the resume in a new window or tab
          window.open(url, '_blank');
          window.URL.revokeObjectURL(url);
        } else {
          console.error("The downloaded file is empty.");
        }
      },
      (error) => {
        console.error("An error occurred while downloading the resume:", error);
      }
    );
  }
  
  

}
