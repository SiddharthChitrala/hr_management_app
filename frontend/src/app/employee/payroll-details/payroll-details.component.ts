import { Component } from '@angular/core';

@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.css']
})
export class PayrollDetailsComponent {
  formData: any = {}; // Create an object to store form data

  goBack() {
    window.location.reload();
  }
  onSubmit() {
    console.log('Form Data:', this.formData);
    this.formData = {};
  }
}
