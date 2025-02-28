import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AddComponent } from './component/add/add.component';
import { ViewComponent } from './component/view/view.component';
import { AboutComponent } from './component/about/about.component';
import { EditComponent } from './component/edit/edit.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"add",component:AddComponent},
  {path:"view",component:ViewComponent},
  {path:"about",component:AboutComponent},
  {path:"edit/:id",component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
