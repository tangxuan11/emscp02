import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebTextComponent } from './web-text.component';

@NgModule({
  declarations: [WebTextComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WebTextComponent
  ]
})
export class WebTextModule { }
