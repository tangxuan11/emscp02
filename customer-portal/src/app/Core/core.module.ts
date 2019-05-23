import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './Components/Footer/footer.component';
//import { SideBarComponent } from './Components/SideBar/side-bar.component';
import { TopNavBarFeatureComponent } from './Components/TopNavBarFeature/top-nav-bar-feature.component';
import { TopNavBarLoginComponent } from './Components/TopNavBarLogin/top-nav-bar-login.component';
//import { NgMaterialModule } from '../Shared/ng-material/ng-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [FooterComponent, TopNavBarFeatureComponent, TopNavBarLoginComponent],
    imports: [
        CommonModule,
        //NgMaterialModule,
        MatIconModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule
    ],
    exports: [
        TopNavBarLoginComponent,
        TopNavBarFeatureComponent,
        //SideBarComponent,
        FooterComponent
    ]
})
export class CoreModule { }
