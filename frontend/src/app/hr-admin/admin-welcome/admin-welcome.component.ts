import { Component } from '@angular/core';
import { EmployeeManagementComponent } from '../employee-management/employee-management.component';
import { RecruitmentOnboardingComponent } from '../recruitment-onboarding/recruitment-onboarding.component';
import { PayrollManagementComponent } from '../payroll-management/payroll-management.component';
import { TrainingDevelopmentComponent } from '../training-development/training-development.component';
import { AttendanceManagementComponent } from '../attendance-management/attendance-management.component';


@Component({
  selector: 'app-admin-welcome',
  templateUrl: './admin-welcome.component.html',
  styleUrls: ['./admin-welcome.component.css']
})
export class AdminWelcomeComponent {

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
      case 'Employee Management':
        this.activeComponent = EmployeeManagementComponent;
        break;
      case 'Recruitment':
        this.activeComponent = RecruitmentOnboardingComponent;
        break;
      case 'Payroll':
        this.activeComponent = PayrollManagementComponent;
        break;
      case 'Training Development':
        this.activeComponent = TrainingDevelopmentComponent;
        break;
      case 'Attendance':
        this.activeComponent = AttendanceManagementComponent;
        break;
      default:
        break;
    }
  }
  navigateTo(section: string) {
    this.setActiveComponent(section);
  }
}