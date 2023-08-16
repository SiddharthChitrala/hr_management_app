import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent {
  goBack() {
    location.reload();
  }
  JobDetails:any[]=[];
  constructor(private http:HttpClient){
    this.getAllJobDetails();
  }
  getAllJobDetails() {
    this.http.get("http://localhost:9000/get/job").subscribe((resultData:any)=>{
      console.log(resultData);
      this.JobDetails=resultData.data;
    })
  }  
}
