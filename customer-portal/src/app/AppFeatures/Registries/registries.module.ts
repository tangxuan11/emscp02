import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistriesRoutingModule } from './registries-routing.module';
import { RegistriesComponent } from './registries.component';

@NgModule({
  declarations: [RegistriesComponent],
  imports: [
    CommonModule,
    RegistriesRoutingModule
  ],
  exports: [
    RegistriesComponent
  ]
})
export class RegistriesModule { }
