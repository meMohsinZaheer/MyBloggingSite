import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-module-components/dashboard/dashboard.component';
import { UploadComponent } from './admin-module-components/upload/upload.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
