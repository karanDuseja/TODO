import { EnrollService } from './../enroll.service';
import { SwitchService } from './../switch.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myReactiveForm:any;
  show: any;
  SwitchService: any;
  abc: any= [1,2,3,4,5];
  images: any=[];
  image: any ;
  constructor(public el : ElementRef,public fb: FormBuilder, public ss: SwitchService, public enroll: EnrollService,private http: HttpClient, private route:Router ) { }
  

  ngOnInit(): void {
    this.myReactiveForm= this.fb.group({
      'password': new FormControl ('', Validators.required),
        'email':new FormControl (' ',[Validators.required,Validators.email]),
        'radio': '',
        'secondradio': '',
        'checkbox': '',
        'thirdradio': ''
    })
    //  FormGroup({
    //   'password': new FormControl(null),
    //   'email': new FormControl(null),
    //   'radio': new FormControl(null),
    //   'secondradio': new FormControl(null),
    //   'checkbox': new FormControl(null),
    //   'thirdradio': new FormControl(null)
    // }); 
     }

     onSubmit(){
       console.log(this.myReactiveForm.value.email)
       this.show = this.myReactiveForm.value.email;
       console.log(this.myReactiveForm.value);
       this.ss.addItem(this.myReactiveForm.value);
      //  this.http.post<any>('http://localhost:3000/enroll', this.myReactiveForm.value).subscribe(data => {
       this.http.post<any>('http://localhost:3000/enroll', this.myReactiveForm.value).subscribe(data => {
         
        
        // this.postId = data.id;
    })
    this.route.navigateByUrl("/list")
      //  this.enroll.enroll(this.show)
      //  .subscribe(
      //    data => console.log('success', data),
      //    error => console.error('error', error)
      //  )
     
     }
    


   

     getMyOut(value: any){
       console.log("",value);

     }
     fr(){
      this.route.navigateByUrl("/list")
     }
   
    selectImage(event: any ){
      this.images=[];
      if (event.target.files.length > 0){
        // const files = event.target.files;
        // this.images = files;
        // console.log(files);
        for(let i=0 ; i < event.target.files.length; i++){
          this.images.push(event.target.files[i]);
        }
      }
      
    }
    onUpload(){
      // let inputEl:HTMLInputElement = this.el.nativeElement.querySelector('#multipleimage');
      // let filecount=inputEl.files?.length;
      // console.log("inputEl.files",filecount)
      const formdata= new FormData();
      // console.log(this.images)
      for(var i=0;i<  this.images.length;i++){
        formdata.append('files', this.images[i]);
      }
      
console.log("gggggggg",formdata)
      this.http.post('http://localhost:3000/uploadimage', formdata)
      .subscribe(
        (res)=> console.log(res),
        (err)=> console.log(err)
      );
    }

    imageData(){
      
      this.enroll.getImageData()
      .subscribe(data => 
        {
          this.image= data;
          console.log(this.image)
        });
      
      
      
      
    }
}

