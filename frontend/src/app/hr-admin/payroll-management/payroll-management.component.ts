import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payroll-management',
  templateUrl: './payroll-management.component.html',
  styleUrls: ['./payroll-management.component.css']
})
export class PayrollManagementComponent {


  Details: any[] = [];
  filteredDetails: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {
    this.getAllDetails();
  }
  getAllDetails() {
    this.http.get("http://localhost:9000/payroll").subscribe((resultData: any) => {
      console.log(resultData);
      this.Details = resultData.data;
    });
  }
  searchDetails() {
    this.filteredDetails = this.Details.filter(payroll => {
      return payroll.fullName.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
  deleteDetails(id: string) {
    this.http.delete(`http://localhost:9000/payroll/${id}`).subscribe(() => {
      this.getAllDetails();
    });
  }
}
