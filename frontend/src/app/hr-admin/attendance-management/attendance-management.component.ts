import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrls: ['./attendance-management.component.css']
})
export class AttendanceManagementComponent {
  goBack() {
    location.reload();
  }
  Details: any[] = [];
  constructor(private http: HttpClient) {
    this.getAllDetails();
  }
  getAllDetails() {
    this.http.get("http://localhost:9000/get").subscribe((resultData: any) => {
      console.log(resultData);
      this.Details = resultData.data;
    })
  }
}
