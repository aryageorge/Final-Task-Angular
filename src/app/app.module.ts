import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrDashboardComponent } from './dashboard/hr-dashboard/hr-dashboard.component';
import { MychartsComponent } from './dashboard/mycharts/mycharts.component';
import { AddEmployeeComponent } from './dashboard/add-employee/add-employee.component';
import { EmployeeMainComponent } from './dashboard/employee-main/employee-main.component';
import { LeaveComponent } from './dashboard/leave/leave.component';
import { DetailsComponent } from './dashboard/details/details.component';
import { LoginComponent } from './dashboard/login/login.component';
import { EmployeeLeaveComponent } from './dashboard/employee-leave/employee-leave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDasboardComponent } from './employee-dasboard/employee-dasboard.component';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeLeaveDashboardComponent } from './employee-leave-dashboard/employee-leave-dashboard.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HrDashboardComponent,
    MychartsComponent,
    AddEmployeeComponent,
    EmployeeMainComponent,
    LeaveComponent,
    DetailsComponent,
    LoginComponent,
    EmployeeLeaveComponent,
    EmployeeDasboardComponent,
  
    EmployeeLeaveDashboardComponent,
       EmployeeProfileComponent,
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
