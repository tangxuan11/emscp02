import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsMainRoutingModule } from './analytics-main-routing.module';
import { AnalyticsMainComponent } from './analytics-main.component';

@NgModule({
    declarations: [AnalyticsMainComponent],
    imports: [
        CommonModule,
        AnalyticsMainRoutingModule
    ]
})
export class AnalyticsMainModule { }
