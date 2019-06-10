import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageInstallationRoutingModule } from './package-installation-routing.module';
import { PackageInstallationComponent } from './package-installation.component';

@NgModule({
  declarations: [PackageInstallationComponent],
  imports: [
    CommonModule,
    PackageInstallationRoutingModule
  ]
})
export class PackageInstallationModule { }
