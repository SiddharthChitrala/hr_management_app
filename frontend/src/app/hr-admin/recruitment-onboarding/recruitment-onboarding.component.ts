import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recruitment-onboarding',
  templateUrl: './recruitment-onboarding.component.html',
  styleUrls: ['./recruitment-onboarding.component.css']
})
export class RecruitmentOnboardingComponent {
  Details:any[]=[];
  goBack(){
    location.reload();
  }
  constructor(private http:HttpClient){
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
}
