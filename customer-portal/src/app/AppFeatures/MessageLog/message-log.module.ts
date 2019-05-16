import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageLogRoutingModule } from './message-log-routing.module';
import { MessageLogComponent } from './message-log.component';

@NgModule({
    declarations: [MessageLogComponent],
    imports: [
        CommonModule,
        MessageLogRoutingModule
    ],
    exports: [
        MessageLogComponent
    ]
})
export class MessageLogModule { }
