import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsMainRoutingModule } from './analytics-main-routing.module';
import { AnalyticsMainComponent } from './analytics-main.component';
import { MainTrafficSummaryComponent } from './MainTrafficSummary/main-traffic-summary.component';
import { ChannelTrafficSummaryComponent } from './ChannelTrafficSummary/channel-traffic-summary.component';
import { CountryTrafficSummaryComponent } from './CountryTrafficSummary/country-traffic-summary.component';

@NgModule({
    declarations: [AnalyticsMainComponent, MainTrafficSummaryComponent, ChannelTrafficSummaryComponent, CountryTrafficSummaryComponent],
    imports: [
        CommonModule,
        AnalyticsMainRoutingModule
    ]
})
export class AnalyticsMainModule { }
