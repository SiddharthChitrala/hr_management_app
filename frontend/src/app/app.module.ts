import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeManagementComponent } from './hr-admin/employee-management/employee-management.component';
import { RecruitmentOnboardingComponent } from './hr-admin/recruitment-onboarding/recruitment-onboarding.component';
import { PayrollManagementComponent } from './hr-admin/payroll-management/payroll-management.component';
import { JobApplicationComponent } from './external-user/job-application/job-application.component';
import { ApplicationStatusComponent } from './external-user/application-status/application-status.component';
import { PayrollDetailsComponent } from './employee/payroll-details/payroll-details.component';
import { AdminAuthComponent } from './hr-admin/admin-auth/admin-auth.component';
import { EmployeeAuthComponent } from './employee/employee-auth/employee-auth.component';
import { UserAuthComponent } from './external-user/user-auth/user-auth.component';
import { HomeComponent } from './home/home.component';
import { AdminWelcomeComponent } from './hr-admin/admin-welcome/admin-welcome.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmployeeWelcomeComponent } from './employee/employee-welcome/employee-welcome.component';
import { UserWelcomeComponent } from './external-user/user-welcome/user-welcome.component';
import { SocketIoModule } from 'ngx-socket-io';
import { RoomComponent } from './employee/room/room.component'; 
import{ AttendanceTimeTrackingComponent } from './employee/attendance-time-tracking/attendance-time-tracking.component';
import { AttendanceManagementComponent } from './hr-admin/attendance-management/attendance-management.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeManagementComponent,
    RecruitmentOnboardingComponent,
    PayrollManagementComponent,
    AttendanceTimeTrackingComponent,
    JobApplicationComponent,
    ApplicationStatusComponent,
    PayrollDetailsComponent,
    AdminAuthComponent,
    EmployeeAuthComponent,
    UserAuthComponent,
    HomeComponent,
    AdminWelcomeComponent,
    EmployeeWelcomeComponent,
    UserWelcomeComponent,
    RoomComponent,
    AttendanceTimeTrackingComponent,
    AttendanceManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule for template-driven forms
    ReactiveFormsModule, // Include ReactiveFormsModule for reactive forms
    HttpClientModule, // Include HttpClientModule for making HTTP requests
    AppRoutingModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
