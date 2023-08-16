import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-meetings',
  templateUrl: './request-meetings.component.html',
  styleUrls: ['./request-meetings.component.css']
})
export class RequestMeetingsComponent {
  constructor(private router: Router) {}

  createRoom() {
    const timestamp = Date.now();
    this.router.navigate(['/Room', timestamp.toString()]);
  }
}
