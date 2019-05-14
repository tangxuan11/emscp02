import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageLogComponent } from './message-log.component';

@NgModule({
  declarations: [MessageLogComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MessageLogComponent
  ]
})
export class MessageLogModule { }
