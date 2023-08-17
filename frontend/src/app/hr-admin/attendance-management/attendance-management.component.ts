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
  constructor(private http: HttpClient) {
    this.getAllDetails();
  }

  Details: any[] = [];
  filteredDetails: any[] = [];
  searchTerm: string = '';

  getAllDetails() {
    this.http.get("http://localhost:9000/get").subscribe((resultData: any) => {
      console.log(resultData);
      this.filteredDetails = resultData.data;
    })
  }
  searchAttendance() {
    this.filteredDetails = this.Details.filter(attendance => {
      return attendance.Name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
