import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface ApiResponse {
  message: string;
}

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {
  showSignupForm: boolean = false;
  username: string = '';
  email: string = '';
  password: string = '';

 constructor(private http: HttpClient, private router: Router) { }

  toggleForm(): void {
    this.showSignupForm = !this.showSignupForm;
  }


  signup(): void {
    this.http.post<ApiResponse>('http://localhost:9000/hr/register', {
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(
      response => {
        console.log(response.message);
      },
      error => {
        console.error('Error signing up:', error);
      }
    );
  }

  login(): void {
    this.http.post<ApiResponse>('http://localhost:9000/hr/login', {
      email: this.email,
      password: this.password
    }).subscribe(
      response => {
        console.log(response.message);
        this.router.navigate(['/admin-welcome']);
      },
      error => {
        console.error('Error logging in:', error);
      }
    );
  }
}
