import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminAuthComponent } from './hr-admin/admin-auth/admin-auth.component';
import { EmployeeAuthComponent } from './employee/employee-auth/employee-auth.component';
import { EmployeeManagementComponent } from './hr-admin/employee-management/employee-management.component';
import { RecruitmentOnboardingComponent } from './hr-admin/recruitment-onboarding/recruitment-onboarding.component';
import { PayrollManagementComponent } from './hr-admin/payroll-management/payroll-management.component';
import { TrainingDevelopmentComponent } from './hr-admin/training-development/training-development.component';
import { AttendanceTimeTrackingComponent } from './hr-admin/attendance-time-tracking/attendance-time-tracking.component';
import { JobApplicationComponent } from './external-user/job-application/job-application.component';
import { ApplicationStatusComponent } from './external-user/application-status/application-status.component';
import { PayrollDetailsComponent } from './employee/payroll-details/payroll-details.component';
import { RequestMeetingsComponent } from './employee/request-meetings/request-meetings.component';
import { AdminWelcomeComponent } from './hr-admin/admin-welcome/admin-welcome.component';
import { UserAuthComponent } from './external-user/user-auth/user-auth.component';
import { UserWelcomeComponent } from './external-user/user-welcome/user-welcome.component';
import { EmployeeWelcomeComponent } from './employee/employee-welcome/employee-welcome.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin-auth', component: AdminAuthComponent },
  { path: 'employee-auth', component: EmployeeAuthComponent },
  { path: 'employee-management', component: EmployeeManagementComponent },
  { path: 'recruitment-onboarding', component: RecruitmentOnboardingComponent },
  { path: 'payroll-management', component: PayrollManagementComponent },
  { path: 'training-development', component: TrainingDevelopmentComponent },
  { path: 'attendance-time-tracking', component: AttendanceTimeTrackingComponent },
  { path: 'job-application', component: JobApplicationComponent },
  { path: 'application-status', component: ApplicationStatusComponent },
  { path: 'payroll-details', component: PayrollDetailsComponent },
  { path: 'request-meetings', component: RequestMeetingsComponent },
  { path: 'admin-welcome', component: AdminWelcomeComponent },
  { path: 'user-auth', component: UserAuthComponent },
  { path: 'user-welcome', component: UserWelcomeComponent },
  { path: 'employee-welcome', component: EmployeeWelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }