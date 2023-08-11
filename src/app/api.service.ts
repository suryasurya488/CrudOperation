import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './list/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee(data:datamodel){
    return this.http.post<datamodel>("http://localhost:3000/posts",data)
  }
  getEmployee(){
    return this.http.get<datamodel[]>("http://localhost:3000/posts");
  }
  deleteEmployee(id:number){
    return this.http.delete<datamodel>("http://localhost:3000/posts/"+id);
  }
  fetchData(id:number){
    return this.http.get<datamodel>("http://localhost:3000/posts/"+id);
  }
  updateData(data:datamodel,id:number){
    return this.http.put<datamodel>("http://localhost:3000/posts/"+id,data)
  }
}
