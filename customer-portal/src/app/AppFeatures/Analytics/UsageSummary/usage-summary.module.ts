import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsageSummaryRoutingModule } from './usage-summary-routing.module';
import { UsageSummaryComponent } from './usage-summary.component';

@NgModule({
  declarations: [UsageSummaryComponent],
  imports: [
    CommonModule,
    UsageSummaryRoutingModule
  ]
})
export class UsageSummaryModule { }
