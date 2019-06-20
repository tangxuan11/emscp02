import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './Components/Footer/footer.component';
import { TopNavBarFeatureComponent } from './Components/TopNavBarFeature/top-nav-bar-feature.component';
import { TopNavBarLoginComponent } from './Components/TopNavBarLogin/top-nav-bar-login.component';


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
import { NotificationComponent } from './Components/TopNavBarFeature/notification/notification.component';

@NgModule({
    declarations: [FooterComponent, TopNavBarFeatureComponent, TopNavBarLoginComponent, NotificationComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule
    ],
    exports: [
        TopNavBarLoginComponent,
        TopNavBarFeatureComponent,
        FooterComponent
    ]
})
export class CoreModule { }
