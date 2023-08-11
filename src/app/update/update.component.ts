import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { datamodel } from '../list/model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  public dataid!:number;
  public employee!:datamodel;
  constructor(private activatedroute:ActivatedRoute,private router:Router,private api:ApiService){}
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:Params)=>{
    this.dataid=param['get']("id");
    //console.log("data id is",this.dataid) 
    })
    this.api.fetchData(this.dataid).subscribe((data:datamodel)=>{
      this.employee = data;
    })
  }
  update(){
    this.api.updateData(this.employee,this.dataid).subscribe((res:datamodel)=>{
      this.router.navigate(["/"])
    })
  }
}
