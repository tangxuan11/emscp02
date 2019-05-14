import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CMSComponent } from './cms.component';

@NgModule({
  declarations: [CMSComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CMSComponent
  ]
})
export class CMSModule { }
