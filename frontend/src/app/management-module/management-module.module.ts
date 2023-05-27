import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { SignUpComponent } from './managementModuleComponents/sign-up/sign-up.component';
import { SignInComponent } from './managementModuleComponents/sign-in/sign-in.component';


@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule
  ]
})
export class ManagementModuleModule { }
