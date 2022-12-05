import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee.model';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-employees',
	templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

	constructor(private dataService: DataService, private router: Router) { }

  employees?:Employee[]
  ngOnInit(): void {
		this.getEmployeeData();
	}
	getEmployeeData() {
		//console.log('hello employees');
		this.dataService.getAllEmployees().subscribe(res => {
			console.log(res);
			this.employees = res;
		});
	}
  deleteEmployee(id:String){
    this.dataService.deleteEmployee(id).subscribe(res=>{
      console.log(res);
      this.getEmployeeData();
    });
  }
  // getOneEmployee(id:String){
  //   this.dataService.getOneEmployee(id).subscribe(res=>{
  //     console.log(res);
  //     this.employeeToUpdate = res;
  //   });
  // }
  updateEmployee(id:String){
    this.router.navigate(['add'],{ queryParams: { id: id } });
  }

}
