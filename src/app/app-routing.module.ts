import { UpdateComponent } from './update/update.component';
import { ListingComponent } from './listing/listing.component';
import { FormComponent } from './form/form.component';
import { SwitchDetailComponent } from './switch-detail/switch-detail.component';
import { TodoComponent } from './todo/todo.component';
import { SwitchComponent } from './switch/switch.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';

const routes: Routes = [
  {
    path: 'switch', component: SwitchComponent
  },
  {
    path: 'todo', component: TodoComponent
  },
  {
    path: 'switch/:id', component: SwitchDetailComponent
  },
  {
    path: 'form', component: FormComponent 
  },
  {
    path: 'lazy', loadChildren:'./lazy/lazy.module#LazyModule'
  },
  {
    path: 'lazyc', component: LazyComponent 
  },
  {
    path: 'list', component: ListingComponent 
  },
  {
    path: 'update/:id', component: UpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SwitchComponent,TodoComponent, SwitchDetailComponent,FormComponent,LazyComponent,ListingComponent, UpdateComponent]
