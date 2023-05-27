import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",loadChildren:()=>import ('./main-module/main-module.module').then(m=>m.MainModuleModule)},
  {path:"main",loadChildren:()=>import('./main-module/main-module.module').then(m=>m.MainModuleModule)},
  {path:"management",loadChildren:()=>import('./management-module/management-module.module').then(m=>m.ManagementModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
