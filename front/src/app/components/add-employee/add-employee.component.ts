import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employee = new Employee(0);
  isEdit = false;
  constructor(private dataService: DataService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParamMap.get('id')){
      this.isEdit = true;
      this.getOneEmployee(this.route.snapshot.queryParamMap.get('id')!);
    }
    console.log(this.isEdit);
    // console.log(this.route.snapshot.queryParamMap.get('id'));
  }
  insertData(){
    this.dataService.addEmployee(this.employee).subscribe(res=>{
      console.log(res);
      console.log("add");
      this.router.navigate([''])
    });
  }
  getOneEmployee(id:String){
    this.dataService.getOneEmployee(id).subscribe(res=>{
      console.log(res);
      this.isEdit = true;
      this.employee = res;
    });
  }
  updateEmployee(){
    this.dataService.updateEmployee(this.employee).subscribe(res=>{
      console.log(res);
      console.log("update")
      this.isEdit = false;
      this.router.navigate([''])

    });
  }
  onSubmit(){
    if (this.isEdit){
      this.updateEmployee();
    }else{
      this.insertData();
    }
  }
}
