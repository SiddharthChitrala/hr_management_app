import { Component } from '@angular/core';
import { JobApplicationComponent } from '../job-application/job-application.component';
import { ApplicationStatusComponent } from '../application-status/application-status.component';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent {
  isMenuOpen: boolean = false;
  activeIndex: number = -1;

  toggleNavbar() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveIndex(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

     // Define a property to keep track of the active component to display
  activeComponent: any = null;

  // Function to set the active component based on the selected list item
  setActiveComponent(section: string) {
    switch (section) {
      case 'Job Application':
        this.activeComponent = JobApplicationComponent;
        break;
      case 'Application Status':
        this.activeComponent = ApplicationStatusComponent;
        break;
      default:
        break;
    }
  }
  navigateTo(section: string) {
    this.setActiveComponent(section);
  }
}