import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CMSComponent } from './cms.component';


const routes: Routes = [
  {
    path: '',
    component: CMSComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CMSRoutingModule { }
