import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { ComponentsModule } from '../../Shared/Components/components.module';

@NgModule({
    declarations: [AnalyticsComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        AnalyticsRoutingModule
    ],
    exports: [
        AnalyticsComponent
    ]
})
export class AnalyticsModule { }
