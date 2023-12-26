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
    this.formValue= this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      typeofleave:[''],
      startdate:[''],
      enddate:[''],
      rfl:[''],
      status:[''],
    })
    this.getAllEmployee();
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd=true;
   
  }
//FOR POSTING A DATA,LETS CREATE A METHOD
postEmployeeDetails(){
  let requestObj : EmployeeModel = {}
  requestObj.firstName=this.formValue.value.firstName;
  requestObj.lastName=this.formValue.value.lastName;
  requestObj.typeofleave=this.formValue.value.typeofleave;
  requestObj.startdate=this.formValue.value.startdate;
  requestObj.enddate=this.formValue.value.enddate;
  requestObj.rfl=this.formValue.value.rfl;
  requestObj.leaveStatus=this.formValue.value.status;
  this.employee.postEmployee(requestObj)
  .subscribe(res=>{
    alert("Employee is added Sucessfully")
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



