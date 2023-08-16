import { Component, Type } from '@angular/core';
import { AttendanceTimeTrackingComponent } from '../attendance-time-tracking/attendance-time-tracking.component';
import { PayrollDetailsComponent } from '../payroll-details/payroll-details.component';
import { RequestMeetingsComponent } from '../request-meetings/request-meetings.component';
import { RoomComponent } from '../room/room.component';

@Component({
  selector: 'app-employee-welcome',
  templateUrl: './employee-welcome.component.html',
  styleUrls: ['./employee-welcome.component.css']
})
export class EmployeeWelcomeComponent {

  isMenuOpen: boolean = false;
  activeIndex: number = -1;

  toggleNavbar() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveIndex(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  // Define a property to keep track of the active component to display
  activeComponent: Type<any> | null = null;

  // Function to set the active component based on the selected list item
  setActiveComponent(section: string) {
    switch (section) {
      case 'Attendance Tracking':
        this.activeComponent = AttendanceTimeTrackingComponent;
        break;
      case 'Payment Details':
        this.activeComponent = PayrollDetailsComponent;
        break;
      case 'Request Meetings':
        this.activeComponent = RequestMeetingsComponent;
        break;
      case 'Room':
        this.activeComponent = RoomComponent;
        break;
      default:
        this.activeComponent = null;
        break;
    }
  }

  navigateTo(section: string) {
    this.setActiveComponent(section);
  }
}
