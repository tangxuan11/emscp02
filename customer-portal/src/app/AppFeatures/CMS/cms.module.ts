import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CMSRoutingModule } from './cms-routing.module';
import { CMSComponent } from './cms.component';

@NgModule({
  declarations: [CMSComponent],
  imports: [
    CommonModule,
    CMSRoutingModule
  ],
  exports: [
    CMSComponent
  ]
})
export class CMSModule { }
