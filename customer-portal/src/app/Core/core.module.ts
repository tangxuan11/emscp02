import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './Components/Footer/footer.component';
import { SideBarComponent } from './Components/SideBar/side-bar.component';
import { TopNavBarFeatureComponent } from './Components/TopNavBarFeature/top-nav-bar-feature.component';
import { TopNavBarLoginComponent } from './Components/TopNavBarLogin/top-nav-bar-login.component';

@NgModule({
  declarations: [FooterComponent, SideBarComponent, TopNavBarFeatureComponent, TopNavBarLoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavBarLoginComponent,
    TopNavBarFeatureComponent,
    SideBarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
