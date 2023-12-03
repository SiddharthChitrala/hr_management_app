import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminAuthComponent } from './hr-admin/admin-auth/admin-auth.component';
import { EmployeeAuthComponent } from './employee/employee-auth/employee-auth.component';
import { EmployeeManagementComponent } from './hr-admin/employee-management/employee-management.component';
import { RecruitmentOnboardingComponent } from './hr-admin/recruitment-onboarding/recruitment-onboarding.component';
import { PayrollManagementComponent } from './hr-admin/payroll-management/payroll-management.component';
import { JobApplicationComponent } from './external-user/job-application/job-application.component';
import { ApplicationStatusComponent } from './external-user/application-status/application-status.component';
import { PayrollDetailsComponent } from './employee/payroll-details/payroll-details.component';
import { AdminWelcomeComponent } from './hr-admin/admin-welcome/admin-welcome.component';
import { UserAuthComponent } from './external-user/user-auth/user-auth.component';
import { UserWelcomeComponent } from './external-user/user-welcome/user-welcome.component';
import { EmployeeWelcomeComponent } from './employee/employee-welcome/employee-welcome.component';
import { RoomComponent } from './employee/room/room.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin-auth', component: AdminAuthComponent },
  { path: 'employee-auth', component: EmployeeAuthComponent },
  { path: 'employee-management', component: EmployeeManagementComponent },
  { path: 'recruitment-onboarding', component: RecruitmentOnboardingComponent },
  { path: 'payroll-management', component: PayrollManagementComponent },
  { path: 'job-application', component: JobApplicationComponent },
  { path: 'application-status', component: ApplicationStatusComponent },
  { path: 'payroll-details', component: PayrollDetailsComponent },
  { path: 'admin-welcome', component: AdminWelcomeComponent },
  { path: 'user-auth', component: UserAuthComponent },
  { path: 'user-welcome', component: UserWelcomeComponent },
  { path: 'employee-welcome', component: EmployeeWelcomeComponent },
  { path: 'Room', component: RoomComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
