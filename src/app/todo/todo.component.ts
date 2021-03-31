import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.components.html',
  styles: []
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public items: any=[];
  
  
  
  public newTask: any = [];
 

  public addToList(){
    if (this.newTask=='' || this.items.indexOf(this.newTask) > -1 ){
      console.log("value exist");


    }
    else{
      console.log('kkkkkkkkkk',this.newTask);
      this.items.push(this.newTask);


      this.newTask='';
      

    }
    
     



    
  }
 

  public deleteTask(index: any) { 
    this.items.splice(index, 1); 
} 

}

function indexOf(newTask: any) {
  throw new Error('Function not implemented.');
}


