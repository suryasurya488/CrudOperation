import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  employeeform!:FormGroup;
  data:undefined|datamodel[];
  constructor(private formbuilder:FormBuilder,private api:ApiService){}

  ngOnInit():void{
     this.employeeform=this.formbuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      city:['',Validators.required],
      email:['',Validators.required],
      phonenumber:['',Validators.required],
     })
     this.getEmployee();
  }

  addEmployee(data:datamodel){
    // console.log(data)
    this.api.addEmployee(data).subscribe((res=>{
        this.employeeform.reset();
    }))
    this.getEmployee();
  }

  getEmployee(){
    // console.log(data)
    this.api.getEmployee().subscribe(res=>{
        this.data = res;
    })
  }
  delete(id:number){
    this.api.deleteEmployee(id).subscribe((res=>{
    this.ngOnInit();
  }))   
  }
}
