import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-switch-detail',
  templateUrl: './switch-detail.component.html',
  styleUrls: ['./switch-detail.component.css']
})
export class SwitchDetailComponent implements OnInit {
switch: any;
  constructor(private switchService: SwitchService) { }

  ngOnInit() {
    this.switch = this.switchService.getSwitch(); 
  }

}
