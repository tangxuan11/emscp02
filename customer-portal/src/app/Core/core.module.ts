import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './Components/Footer/footer.component';
//import { SideBarComponent } from './Components/SideBar/side-bar.component';
import { TopNavBarFeatureComponent } from './Components/TopNavBarFeature/top-nav-bar-feature.component';
import { TopNavBarLoginComponent } from './Components/TopNavBarLogin/top-nav-bar-login.component';
import { NgMaterialModule } from '../Shared/ng-material/ng-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [FooterComponent, TopNavBarFeatureComponent, TopNavBarLoginComponent],
    imports: [
        CommonModule,
        NgMaterialModule,
        FlexLayoutModule
    ],
    exports: [
        TopNavBarLoginComponent,
        TopNavBarFeatureComponent,
        //SideBarComponent,
        FooterComponent
    ]
})
export class CoreModule { }
