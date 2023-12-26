import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup}from '@angular/forms'
import { EmployeeModel } from './employee-dash board.model';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-employee-dasboard',
  templateUrl: './employee-dasboard.component.html',
  styleUrls: ['./employee-dasboard.component.scss']
})
export class EmployeeDasboardComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeModelObj:EmployeeModel=new EmployeeModel();
  employeeData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  
  constructor(private formbuilder:FormBuilder,private api:AdminService){}

  ngOnInit(): void {
    this.employeeForm= this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      age:[''],
      dob:[''],
      employeeRole:[''],
      email:[''],
      mobileNumber:[''],
      gender:[''],
      bloodGroup:[''],
      image:[''],
     
    })
    this.getAllEmployee();
  }
  clickAddEmployee(){
    this.employeeForm.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

postEmployeeDetails(){
  
  const req: EmployeeModel = {}
  req.firstName=this.employeeForm.value.firstName;
  req.lastName=this.employeeForm.value.lastName;
  req.age=this.employeeForm.value.age;
  req.dob=this.employeeForm.value.dob;
  req.employeeRole=this.employeeForm.value.employeeRole;
  req.email=this.employeeForm.value.email;
  req.mobileNumber=this.employeeForm.value.mobileNumber;
  req.gender=this.employeeForm.value.gender;
  req.bloodGroup=this.employeeForm.value.bloodGroup;
  req.image=this.employeeForm.value.image;

  
  this.api.postEmployee(req)
  .subscribe(res=>{
    alert("Employee is added Sucessfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.employeeForm.reset();
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
    console.log("employeeData",this.employeeData)
  })
}
deleteEmployee(row:any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employee Deleted");
    this.getAllEmployee();
  })
}
onEdit(row:any){
  this.showAdd=false;
    this.showUpdate=true;
  this.employeeModelObj.id=row.id;
  this.employeeForm.controls['firstName'].setValue(row.firstName);
  this.employeeForm.controls['lastName'].setValue(row.lastName);
  this.employeeForm.controls['age'].setValue(row.age);
  this.employeeForm.controls['dob'].setValue(row.dob);
  this.employeeForm.controls['employeeRole'].setValue(row.employeeRole);
  this.employeeForm.controls['email'].setValue(row.email);
  this.employeeForm.controls['mobileNumber'].setValue(row.mobileNumber);
  this.employeeForm.controls['gender'].setValue(row.gender);
  this.employeeForm.controls['bloodGroup'].setValue(row.bloodGroup);
  this.employeeForm.controls['image'].setValue(row.image);



}
updateEmployeeDetails(){
 
  this.employeeModelObj.firstName=this.employeeForm.value.firstName;
  this.employeeModelObj.lastName=this.employeeForm.value.lastName;
  this.employeeModelObj.age=this.employeeForm.value.age;
  this.employeeModelObj.dob=this.employeeForm.value.dob;
  this.employeeModelObj.employeeRole=this.employeeForm.value.employeeRole;
  this.employeeModelObj.email=this.employeeForm.value.email;
  this.employeeModelObj.mobileNumber=this.employeeForm.value.mobileNumber;
  this.employeeModelObj.gender=this.employeeForm.value.gender;
  this.employeeModelObj.bloodGroup=this.employeeForm.value.bloodGroup;
  this.employeeModelObj.image=this.employeeForm.value.image;
 
  this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
  .subscribe(res=>{
    alert("Updated Sucessfully");
    
    let ref = document.getElementById('cancel')
    ref?.click();
    this.employeeForm.reset();
    this.getAllEmployee();

  })

  
}

}
