import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '../../Shared/Components/components.module';
import { DashboardSubAComponent } from './DashboardSubA/dashboard-sub-a.component';

import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule 
} from '@angular/material';


@NgModule({
    declarations: [DashboardComponent, DashboardSubAComponent],
    imports: [
        CommonModule,
        ComponentsModule,
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
