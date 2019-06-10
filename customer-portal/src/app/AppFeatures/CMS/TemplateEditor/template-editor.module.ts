import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateEditorRoutingModule } from './template-editor-routing.module';
import { TemplateEditorComponent } from './template-editor.component';

@NgModule({
  declarations: [TemplateEditorComponent],
  imports: [
    CommonModule,
    TemplateEditorRoutingModule
  ]
})
export class TemplateEditorModule { }
