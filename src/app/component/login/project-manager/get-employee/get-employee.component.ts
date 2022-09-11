import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/EmployeeDetails';
import { JobDescription } from 'src/app/domain/JobDescription';
import { LoginDetails } from 'src/app/domain/LoginDetails';
import { ProjectDetails } from 'src/app/domain/project-details';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

loginDetails : LoginDetails = new LoginDetails();
allemployeeDetails : EmployeeDetails []=[];
projectDetails : ProjectDetails = new ProjectDetails();
// jobdescription :JobDescription =new JobDescription();
employeeDetails : EmployeeDetails=new EmployeeDetails();
jobId : string="";
  constructor(private router: Router,
    private employeeService : EmployeeService,
     private loginService : LoginService,
     private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.jobId= this.activatedRoute.snapshot.params['jobId'];
    this.getEmployee(this.jobId);
    // this.loginDetails=JSON.parse(sessionStorage.getItem('login') ||'{}');
    // console.log(this.loginDetails);
    // this.employeeService.getOneEmployee(this.loginDetails.loginid).subscribe(
    //  data=> {
    //    this.employeeDetails=data;
    //    console.log(this.employeeDetails);
    //  }
    // );
    
 }

  getEmployee(jobId:string){
    console.log("in getEmployee()");
    console.log(this.employeeDetails);
    this.employeeDetails = this.employeeDetails;
  
    this.employeeService.getEmployee(this.jobId).subscribe(
      data=>{
        this.allemployeeDetails=data;
        console.log("data received");
        
        console.log(this.allemployeeDetails);
       
      }
    ); 
}
changeInEmployeeDetails(employee : EmployeeDetails){
  console.log(employee);
  
  this.employeeService.changeInEmployeeDetails(employee).subscribe(
    data=>{
      this.employeeDetails= data;
console.log(this.employeeDetails);

    }
  );
}

}
