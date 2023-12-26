import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup}from '@angular/forms'
import { EmployeeProfile } from './employee-profile.model';
import { AdminService } from '../shared/admin.service';


@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent  implements OnInit {
  profileForm!: FormGroup;
  employeeModelObj:EmployeeProfile=new EmployeeProfile();
  employeeData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  loginEmployee:any;
  updateButtonLabel = "Edit";
  isClickOnEdit = false;
  constructor(private formbuilder:FormBuilder,private api:AdminService){
    
    this.profileForm= this.newGroup("")
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  newGroup(data:any){
    return this.formbuilder.group({
      firstName:[data?.firstName ? data.firstName : ""],
      lastName:[data?.lastName ? data.lastName : ""],
      age:[data?.age ? data.age : ""],
      dob:[data?.dob ? data.dob : ""],
      employeeRole:[data?.employeeRole ? data.employeeRole : ""],
      email:[data?.email ? data.email : ""],
      mobileNumber:[data?.mobileNumber ? data.mobileNumber : ""],
      gender:[data?.gender ? data.gender : ""],
      bloodGroup:[data?.bloodGroup ? data.bloodGroup : ""],
      image:[data?.image ? data.image : ""]
    })
  }
  clickAddEmployee(){
    this.profileForm.reset();
   this.showUpdate=false;
  }

postEmployeeDetails(){
  let req :EmployeeProfile = {}
  req.firstName=this.profileForm.value.firstName;
  req.lastName=this.profileForm.value.lastName;
  req.age=this.profileForm.value.age;
  req.dob=this.profileForm.value.dob;
  req.employeeRole=this.profileForm.value.employeeRole;
  req.email=this.profileForm.value.email;
  req.mobileNumber=this.profileForm.value.mobileNumber;
  req.gender=this.profileForm.value.gender;
  req.bloodGroup=this.profileForm.value.bloodGroup;
  req.image=this.profileForm.value.image;
console.log("req",req)

  this.api.postEmployee(req)
  .subscribe(res=>{
    alert("Employee is added Sucessfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.profileForm.reset();
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
this.employeeData.forEach((element:any) => {
  if(element.firstName=="Arya"){
this.loginEmployee=element;

  }
  
});
this.profileForm = this.newGroup(this.loginEmployee)
this.profileForm.disable();
console.log(this.loginEmployee,this.profileForm);
  })
}

onEdit(row:any){
  
    this.showUpdate=true;
  this.employeeModelObj.id=row.id;
  this.profileForm.controls['firstName'].setValue(row.firstName);
  this.profileForm.controls['lastName'].setValue(row.lastName);
  this.profileForm.controls['age'].setValue(row.age);
  this.profileForm.controls['dob'].setValue(row.dob);
  this.profileForm.controls['employeeRole'].setValue(row.employeeRole);
  this.profileForm.controls['email'].setValue(row.email);
  this.profileForm.controls['mobileNumber'].setValue(row.mobileNumber);
  this.profileForm.controls['gender'].setValue(row.gender);
  this.profileForm.controls['bloodGroup'].setValue(row.bloodGroup);
  this.profileForm.controls['image'].setValue(row.image);


}

updateProfile(){
  this.employeeModelObj.firstName=this.profileForm.value.firstName;
  this.employeeModelObj.lastName=this.profileForm.value.lastName;
  this.employeeModelObj.age=this.profileForm.value.age;
  this.employeeModelObj.dob=this.profileForm.value.dob;
  this.employeeModelObj.employeeRole=this.profileForm.value.employeeRole;
  this.employeeModelObj.email=this.profileForm.value.email;
  this.employeeModelObj.mobileNumber=this.profileForm.value.mobileNumber;
  this.employeeModelObj.gender=this.profileForm.value.gender;
  this.employeeModelObj.bloodGroup=this.profileForm.value.bloodGroup;
  this.employeeModelObj.image=this.profileForm.value.image;
  this.api.updateEmployee(this.employeeModelObj,this.loginEmployee.id)
  .subscribe(res=>{
   if(res){
    alert("Updated Sucessfully");
    this.isClickOnEdit = false;
    let ref = document.getElementById('cancel')
    ref?.click();
    this.profileForm.reset();
    this.getAllEmployee();
    this.updateButtonLabel = "Edit";
    this.profileForm.disable();

   }
  })
}
clickOnEdit(){
  console.log(this.loginEmployee);
  
  this.isClickOnEdit = true;
  this.profileForm.enable();
  this.updateButtonLabel = "Update";

}
}



