import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateEditorComponent } from './template-editor.component';

const routes: Routes = [
  {
      path: '',
      component: TemplateEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateEditorRoutingModule { }
