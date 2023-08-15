import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-auth',
  templateUrl: './employee-auth.component.html',
  styleUrls: ['./employee-auth.component.css']
})
export class EmployeeAuthComponent {

  showSignupForm: boolean = false;
  username: string = ''; // Declare and initialize here
  email: string = '';    // Declare and initialize here
  password: string = ''; // Declare and initialize here

  constructor(private http: HttpClient,
    private router: Router) {
    // No need to initialize properties again here
  }
  
  toggleForm() {
    this.showSignupForm = !this.showSignupForm;
  }

  login() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    console.log("Login Data:", loginData); // Print login data

    this.http.post<any>('http://localhost:9000/emp/login', loginData)
      .subscribe(
        (response) => {
          if (response.status === true) {
            alert(response.message);
            console.log(response.message);
            this.router.navigate(['/employee-welcome']);
          } else {
            alert(response.message);
            console.log(response.message);
          }
        },
        (error) => {
          console.log("Error:", error);
        }
      );
  }

  signup() {
    const signupData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    console.log("Signup Data:", signupData); // Print signup data

    this.http.post<any>('http://localhost:9000/emp/register', signupData)
      .subscribe(
        (response) => {
          if (response.status === true) {
            alert(response.message);
            console.log(response.message);
          } else {
            alert(response.message);
            console.log(response.message);
          }
        },
        (error) => {
          console.log("Error:", error);
        }
      );
  }
}
