import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { server } from './serverinterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  url1= 'http://localhost:3000/enroll/';

  constructor(private http: HttpClient ) { }


  enroll(user: any){
    console.log("llllllllllll",user);
    return this.http.post<any>( user,this.url1);

  }

  url2: any = "http://localhost:3000/form2";
  getServerData(): Observable<server[]>{
    return  this.http.get<server[]>(this.url2); 
   
  }
  url3: any = "http://localhost:3000/delete"
  
  deleteServerData(id:any): Observable<any>{
    // console.log(id);
    var body={
      id:id
    }
    return  this.http.post<any>(this.url3, body); 

  
  }
  url4: any = "http://localhost:3000/update"
  updateServerData(body: any):  Observable<any>{
  
    return  this.http.post<any>(this.url4, body); 
}

url5: any = "http://localhost:3000/getdataid"
getDatabyId(id: any):  Observable<any>{
  console.log();
 
  return  this.http.get<any>(this.url5+'/'+id);

}

getImageData(): Observable<any>{
  return  this.http.get<any>("http://localhost:3000/displayimage"); 
}
}



