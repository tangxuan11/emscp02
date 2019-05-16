import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebTextRoutingModule } from './web-text-routing.module';
import { WebTextComponent } from './web-text.component';

@NgModule({
    declarations: [WebTextComponent],
    imports: [
        CommonModule,
        WebTextRoutingModule
    ],
    exports: [
        WebTextComponent
    ]
})
export class WebTextModule { }
