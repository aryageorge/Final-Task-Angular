import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup}from '@angular/forms'
import { LeaveModel } from './employee-leave-dashboard.model';
import{ EmployeeService}from '../shared/employee.service'

@Component({
  selector: 'app-employee-leave-dashboard',
  templateUrl: './employee-leave-dashboard.component.html',
  styleUrls: ['./employee-leave-dashboard.component.scss']
})
export class EmployeeLeaveDashboardComponent implements OnInit {
  formValue!: FormGroup;

  employeeData!:any;
  showAdd!:boolean;
 
  constructor(private formbuilder:FormBuilder,private api:EmployeeService){}

  ngOnInit(): void {
    this.formValue= this.formbuilder.group({
      typeofleave:[''],
      startdate:[''],
      enddate:[''],
      rfl:['']
    })
    this.getAllEmployee();
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd=true;
   
  }

postEmployeeDetails(){
  let leave:LeaveModel={}
  leave.typeofleave=this.formValue.value.typeofleave;
  leave.startdate=this.formValue.value.startdate;
   leave.enddate=this.formValue.value.enddate;
   leave.rfl=this.formValue.value.rfl;

  

  this.api.postEmployee(leave)
  .subscribe(res=>{
    alert("Leave is added  Sucessfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();
    
  },
  err=>{
    alert("Something went wrong")
  })
  


}

getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
    this.employeeData=res;

  })
}


  

}
