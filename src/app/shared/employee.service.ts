import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  postEmployee(data:any){
    return this.http.post<any>("http://localhost:3000/leave",data)
    
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }
  getEmployee(){
    return this.http.get<any>("http://localhost:3000/leave")
    
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }
  
  approveLeave(id:number, data:any){
    return this.http.put<any>( `http://localhost:3000/leave/${id}`,data)
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }
 rejectLeave(id:number,data:any){
  return this.http.put<any>( `http://localhost:3000/leave/${id}`,data)
    .pipe(map((res:any)=>
    {
      return res;
    }))
 }
  
  }


