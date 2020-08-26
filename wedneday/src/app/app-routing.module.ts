import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstcomponentComponent } from "./firstcomponent/firstcomponent.component";
import { SecondcomponentComponent } from "./secondcomponent/secondcomponent.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo:"/first", pathMatch:"full"},
  {path:"first", component: FirstcomponentComponent},
  {path:"second", component:SecondcomponentComponent},
  {path:"**", component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
