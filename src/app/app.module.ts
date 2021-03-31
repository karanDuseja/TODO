import { SwitchService } from './switch.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchDetailComponent } from './switch-detail/switch-detail.component';
import { Form2Component } from './form2/form2.component';
import { HttpClientModule } from '@angular/common/http';
import { ListingComponent } from './listing/listing.component';
import { UpdateComponent } from './update/update.component';






@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SwitchDetailComponent,
    Form2Component,
    ListingComponent,
    UpdateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
    

  ],
  providers: [SwitchService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('mod load');
  }
}
