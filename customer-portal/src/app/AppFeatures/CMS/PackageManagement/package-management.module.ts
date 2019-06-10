import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageManagementRoutingModule } from './package-management-routing.module';
import { PackageManagementComponent } from './package-management.component';

@NgModule({
  declarations: [PackageManagementComponent],
  imports: [
    CommonModule,
    PackageManagementRoutingModule
  ]
})
export class PackageManagementModule { }
