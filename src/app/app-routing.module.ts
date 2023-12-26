import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dashboard/login/login.component';
import { AddEmployeeComponent } from './dashboard/add-employee/add-employee.component';
import { DetailsComponent } from './dashboard/details/details.component';
import { EmployeeMainComponent } from './dashboard/employee-main/employee-main.component';
import { HrDashboardComponent } from './dashboard/hr-dashboard/hr-dashboard.component';
import { LeaveComponent } from './dashboard/leave/leave.component';
import { MychartsComponent } from './dashboard/mycharts/mycharts.component';
import { EmployeeLeaveComponent } from './dashboard/employee-leave/employee-leave.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},

  {path:'hr',component:HrDashboardComponent,
  
    children:[
      
      {path:'add-employee',component:AddEmployeeComponent},//Which directs to employee page in Hr-dashboard(for adding-employee)
      {path:'mycharts',component:MychartsComponent},//directs to charts in Hr-dashboard
      {path:'employee-leave',component:EmployeeLeaveComponent},//directs to leave application of each employee in Hr-dashboard(where the hr can approve or reject the leave application )

    ]},
    {path:'employee',component:EmployeeMainComponent,
    children:[
    
      {path:'details',component:DetailsComponent},//which directs to employee profile in Employee-dashboard
      {path:'leave',component:LeaveComponent},//which directs to leave application for applying leave .

    ]},
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
