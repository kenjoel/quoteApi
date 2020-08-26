import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstcomponentComponent } from "./firstcomponent/firstcomponent.component";
import { SecondcomponentComponent } from "./secondcomponent/secondcomponent.component";

const routes: Routes = [
  {path:"first", component: FirstcomponentComponent},
  {path:"second", component:SecondcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
