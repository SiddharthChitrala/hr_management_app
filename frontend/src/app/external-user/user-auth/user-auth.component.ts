import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ApiResponse {
  message: string;
}

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  showSignupForm: boolean = false;
  username: string = '';
  email: string = '';
  password: string = '';

 constructor(private http: HttpClient, private router: Router) { }

  toggleForm(): void {
    this.showSignupForm = !this.showSignupForm;
  }


  signup(): void {
    this.http.post<ApiResponse>('http://localhost:9000/user/register', {
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(
      response => {
        console.log(response.message);
        alert(response.message);
      },
      error => {
        console.error('Error signing up:', error);
        alert('Error signing up');
      }
    );
  }

  login(): void {
    this.http.post<ApiResponse>('http://localhost:9000/user/login', {
      email: this.email,
      password: this.password
    }).subscribe(
      response => {
        alert(response.message);
        console.log(response.message);
        this.router.navigate(['/user-welcome']);
      },
      error => {
        console.error('Error logging in:', error);
        alert("Invalid Credentials");
      }
    );
  }
}
