import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { ComponentsModule } from '../../Shared/Components/components.module';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    AnalyticsComponent
  ]
})
export class AnalyticsModule { }
