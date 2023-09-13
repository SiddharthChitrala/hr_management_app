import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.css']
})
export class PayrollDetailsComponent {

  bankName: string = '';
  accountNumber: string = '';
  cvv: string = '';
  expirationDate: string = '';

  constructor(private http: HttpClient) {}

  goBack() {
    window.location.reload();
  }

  onSubmit() {
    // Create an object with the form data
    const formData = {
      bankName: this.bankName,
      accountNumber: this.accountNumber,
      cvv: this.cvv,
      expirationDate: this.expirationDate
    };

    // Make an HTTP POST request to your server
    this.http.post('http://localhost:9000/payroll', formData)
      .subscribe(
        (response) => {
          // Handle the success response from the server if needed
          console.log('Data posted successfully', response);
        },
        (error) => {
          // Handle any errors that occurred during the POST request
          console.error('Error posting data:', error);
        }
      );
  }
}
