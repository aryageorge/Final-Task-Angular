import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginObj:any={
    userName:'',
    password:''
  }
  constructor(private router:Router ,private adminService:AdminService ){

  }
  ngOnInit(): void {
    
  }
  onLogin() {
    if(this.loginObj.userName=='georgemp23@gmail.com'&& this.loginObj.password=='george@123'){
      this.adminService.getLoginedUser("Arya")
      .subscribe( 
       { next: (res) => {
          const loginedUser = res;
          this.router.navigateByUrl('hr'); // hr page
          localStorage.setItem("userDetails", JSON.stringify(loginedUser));
          console.log("loginedUser", loginedUser);
        },
        error: (err) => {
          alert("Wrong Credentials");
        }})
     
    }
     else if(this.loginObj.userName=='Arya'&& this.loginObj.password=='Arya@123') {
      
      this.router.navigateByUrl('employee')//employee page
     }
    
  }

}
