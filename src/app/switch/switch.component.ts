import { SwitchService } from './../switch.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router' ; 

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styles: [
  ]
})
export class SwitchComponent implements OnInit {
  
  @Input() myInput: any ; 
  @Output()  myOutput : EventEmitter<any> = new EventEmitter();

  StringToParent: any='string working';


  constructor(private router: Router, private SwitchService: SwitchService) { }
  msg: any;
  msgUse: any;
  formDataNew : any;
 

  ngOnInit(): void { 
    console.log(this.myInput);
    
  }
  viewMode='map';

  test=[
    {
      id: 1,
      name: 'karan',
      score: 23
    },
    {
      id: 2,
      name: 'karasdfsd',
      score: 283
    },
    {
      id: 3,
      name: 'karasdfsdfn',
      score: 233
    },
    {
      id: 4,
      name: 'karsdfan',
      score: 223
    },
  ]
  onClick(){
    this.msg = new SwitchService();
     this.msgUse=  this.msg.getSwitch();
    console.log(this.msgUse);
  }


  public go(test: any ){
    this.router.navigate(['/switch', test]);

  }
  
    getItemAdd(){
      // this.formDataNew = new SwitchService();
      this.formDataNew=  this.SwitchService.getItems();
      console.log(this.formDataNew);
    }

    sendData(){
      
      this.myOutput.emit(this.StringToParent);
    }
  }

  




