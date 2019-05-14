import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebTextComponent } from './web-text.component';


const routes: Routes = [
  {
    path: '',
    component: WebTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebTextRoutingModule { }