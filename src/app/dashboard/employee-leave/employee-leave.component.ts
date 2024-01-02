import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-leave.model';
import {  EmployeeService } from 'src/app/shared/employee.service';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.scss']
})
export class EmployeeLeaveComponent implements OnInit {
  formValue!: FormGroup;
  employeeData:any = [];
  showAdd!:boolean;
 loginedUserDetails:any;
  constructor(private formbuilder:FormBuilder,private employee:EmployeeService, private admin: AdminService){
    const details = localStorage.getItem("userDetails");
    this.loginedUserDetails = JSON.parse(details || "")
  }

  ngOnInit(): void {
   
    this.getAllEmployee();
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd=true;
   
  }


getAllEmployee(){
  this.employeeData=[];
  let leaveDetails: any = {};
  this.employee.getEmployee()
  .subscribe(res=>{
    if(res){

res.forEach((item:any)=>{
  leaveDetails = item;
  leaveDetails.firstName = this.loginedUserDetails[0].firstName;
  leaveDetails.lastName = this.loginedUserDetails[0].lastName;
  this.employeeData.push(leaveDetails)
})


console.log("res",res,this.loginedUserDetails,leaveDetails,this.employeeData)

    }

  })
}

approveLeave(row:any){
  let requestObj : EmployeeModel = {}
  requestObj = row;
  requestObj.leaveStatus = "Approved";
  this.employee.approveLeave(row.id,requestObj)
  .subscribe(res=>{
    if(res){
      this.getAllEmployee();
    }
   

  })
}

rejectLeave(row:any){
  let requestObj : EmployeeModel = {}
  requestObj = row;
  requestObj.leaveStatus = "Rejected";
  this.employee.approveLeave(row.id,requestObj)
  .subscribe(res=>{
    if(res){
      this.getAllEmployee();
    }
   

  })
}
  

}



