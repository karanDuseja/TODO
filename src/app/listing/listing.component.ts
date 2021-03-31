import { Router, RouterModule } from '@angular/router';
import { EnrollService } from './../enroll.service';
import { server } from './../serverinterface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(public http: HttpClient, public enroll: EnrollService, public route: Router) {
    this.getServer()
   }

  ngOnInit(): void {
  }
  serverData: any=[];
  url: any = "http://localhost:3000/form2";
  getServer(){
    this.enroll.getServerData()
    .subscribe(data => this.serverData= data);
    console.log(this.serverData);
  }

  serverDelete(id:any){
    // console.log(id)
    this.enroll.deleteServerData(id)
    .subscribe(data => console.log(""));
    // console.log(this.serverData);
    this.getServer()


  }
  adr(){
    this.route.navigateByUrl("/form")
  }

  // udr(){
  //   this.route.navigateByUrl("/update"+'/'+id)
  // }

  serverUpdate(id: any){
    // this.enroll.updateServerData(id)
    // .subscribe(data => console.log(""));
    // this.udr()
    
    this.route.navigateByUrl("/update"+'/'+id)


  }
  }



