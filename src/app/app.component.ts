import { Component } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  constructor(private route:Router){}

  sr(){
		this.route.navigate(['/switch']); 
	}

  tdr(){
		this.route.navigate(['/todo']); 
	}

  frm(){
    this.route.navigate(['/form']);
  }
  lzy(){
    
    this.route.navigateByUrl('/lazyc');
  }

  lst(){
    this.route.navigateByUrl('/list')

  }


  
}

