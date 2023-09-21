import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  empName: string = '';
  phoneNo: string = '';
  address: string = '';
  email: string = '';
  bloodGroup: string = '';
  editMode: boolean = false;
  editEmployeeId: string = '';

  constructor(private http: HttpClient) { }

  Details: any[] = [];
  filteredDetails: any[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.getAllDetails();
  }

  editDetails(employee: any) {
    // Populate the form with the selected employee's data for editing
    this.editMode = true;
    this.editEmployeeId = employee._id;
    this.empName = employee.empName;
    this.phoneNo = employee.phoneNo;
    this.address = employee.address;
    this.email = employee.email;
    this.bloodGroup = employee.bloodGroup;
  }

  saveEmployee() {
    const formData = {
      empName: this.empName,
      phoneNo: this.phoneNo,
      address: this.address,
      email: this.email,
      bloodGroup: this.bloodGroup
    };

    // Define headers for JSON content
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    if (this.editMode) {
      console.log('Edit Employee ID:', this.editEmployeeId);
      console.log('Request Payload:', formData);

      // If in edit mode, send a PUT request to update the existing employee
      this.http.patch<any>(`http://localhost:9000/emp/${this.editEmployeeId}`, formData, { headers }).subscribe(
        (response) => {
          console.log('Updated successfully...', response.message);
          this.clearForm();
          this.editMode = false;
          // After updating, reload the employee list
          this.getAllDetails();
        },
        (error) => {
          console.error('Error updating data:', error);

          if (error.status === 404) {
            // Handle 404 Not Found error here, e.g., display a user-friendly message.
            console.error('Employee not found.');
          } else {
            // Handle other error cases as needed.
            console.error('An error occurred while updating.');
          }
        }
      );
    } else {
      // If not in edit mode, send a POST request to create a new employee
      this.http.post<any>('http://localhost:9000/emp', formData, { headers }).subscribe(
        (response) => {
          console.log('Submitted successfully...', response.message);
          this.clearForm();
          // After submitting, reload the employee list
          this.getAllDetails();
        },
        (error) => {
          console.error('Error submitting data:', error);
          // Handle error cases as needed.
        }
      );
    }
  }

  clearForm() {
    // Clear form fields after submission or canceling edit
    this.editMode = false;
    this.editEmployeeId = '';
    this.empName = '';
    this.phoneNo = '';
    this.address = '';
    this.email = '';
    this.bloodGroup = '';
  }

  searchEmpName() {
    if (this.Details) {
      this.filteredDetails = this.Details.filter(employee => {
        return employee.empName.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  }

  getAllDetails() {
    this.http.get("http://localhost:9000/emp").subscribe(
      (resultData: any) => {
        console.log(resultData);
        this.Details = resultData.data;
      },
      (error) => {
        console.error('Error fetching data:', error);
        // Handle error cases as needed.
      }
    );
  }

  deleteDetails(id: string) {
    this.http.delete(`http://localhost:9000/emp/${id}`).subscribe(() => {
      // After deleting, reload the employee list
      this.getAllDetails();
    });
  }
}
