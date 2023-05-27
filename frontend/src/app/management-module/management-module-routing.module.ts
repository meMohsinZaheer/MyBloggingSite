import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementModuleComponent } from './management-module.component';
import { SignInComponent } from './managementModuleComponents/sign-in/sign-in.component';
import { SignUpComponent } from './managementModuleComponents/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',component:ManagementModuleComponent,
    children:[
      {path:'sign-in',component:SignInComponent},
      {path:'sign-up',component:SignUpComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
