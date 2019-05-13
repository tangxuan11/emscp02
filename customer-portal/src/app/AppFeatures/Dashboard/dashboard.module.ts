import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../../Shared/Components/components.module';
import { DashboardSubAComponent } from './DashboardSubA/dashboard-sub-a.component';

@NgModule({
  declarations: [DashboardComponent, DashboardSubAComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
