import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardSubAComponent } from './DashboardSubA/dashboard-sub-a.component';

import {
    MatIconModule,
    MatToolbarModule 
} from '@angular/material';


@NgModule({
    declarations: [DashboardComponent, DashboardSubAComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule { }
