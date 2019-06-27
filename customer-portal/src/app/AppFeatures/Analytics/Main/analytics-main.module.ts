import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//For Fusion Chart
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

import { AnalyticsMainRoutingModule } from './analytics-main-routing.module';
import { AnalyticsMainComponent } from './analytics-main.component';
import { MainTrafficSummaryComponent } from './MainTrafficSummary/main-traffic-summary.component';
import { ChannelTrafficSummaryComponent } from './ChannelTrafficSummary/channel-traffic-summary.component';
import { CountryTrafficSummaryComponent } from './CountryTrafficSummary/country-traffic-summary.component';

@NgModule({
    declarations: [AnalyticsMainComponent, MainTrafficSummaryComponent, ChannelTrafficSummaryComponent, CountryTrafficSummaryComponent],
    imports: [
        CommonModule,
        AnalyticsMainRoutingModule,
        FusionChartsModule
    ]
})
export class AnalyticsMainModule { }
