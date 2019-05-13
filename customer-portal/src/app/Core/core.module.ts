import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Components/Footer/footer.component';
import { SideBarComponent } from './Components/SideBar/side-bar.component';
import { TopNavBarComponent } from './Components/TopNavBar/top-nav-bar.component';

@NgModule({
  declarations: [FooterComponent, SideBarComponent, TopNavBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavBarComponent,
    SideBarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
