import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarRoutingModule } from './side-bar-routing.module';
import { SideBarComponent} from './side-bar.component';
import { SideBarLinkComponent } from './side-bar-link.component';
import {
    MatIconModule,
    MatListModule
} from '@angular/material';

@NgModule({
    declarations: [
        SideBarComponent,
        SideBarLinkComponent
    ],
    imports: [
        CommonModule,
        SideBarRoutingModule,
        MatIconModule,
        MatListModule
    ],
    exports: [SideBarComponent]
})
export class SideBarModule { }
