import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EnrollService } from './../enroll.service';
import { server } from './../serverinterface';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;
  showData: any=[];

  constructor(private activatedRoute: ActivatedRoute, public fb: FormBuilder,   public http: HttpClient, public enroll: EnrollService, public route: Router) {
    this.activatedRoute.params.subscribe(params => {
      if (typeof params['id'] !== 'undefined') {
          this.id = params['id'];
      } else {
          this.id = '';

      }
     console.log(this.id)
  });

   }
myForm: any;
  ngOnInit(): void {
    this.dataById();
    this.myForm= this.fb.group({ 
      'password': new FormControl ('', Validators.required),
        'email':new FormControl (' ',[Validators.required,Validators.email]),
        'radio': '',
        'secondradio': '',
        'checkbox': '',
        'thirdradio': ''
    })
  }
  dataById(){
    this.enroll.getDatabyId(this.id)
    .subscribe(data => this.showData=data);


  }

  updateSubmit(){

    var body={
      id: this.id,
      email: this.myForm.value.email,
        password : this.myForm.value.password

    }
    this.enroll.updateServerData(body)
    .subscribe(data => console.log(data))
  }

}
