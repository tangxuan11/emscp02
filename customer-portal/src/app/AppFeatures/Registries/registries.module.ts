import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistriesComponent } from './registries.component';

@NgModule({
  declarations: [RegistriesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RegistriesComponent
  ]
})
export class RegistriesModule { }
