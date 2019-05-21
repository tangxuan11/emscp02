import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarRoutingModule } from './side-bar-routing.module';
import { SideBarComponent} from './side-bar.component';
import { SideBarLinkComponent } from './side-bar-link.component';
import { NgMaterialModule } from '../../../Shared/ng-material/ng-material.module';

@NgModule({
  declarations: [SideBarComponent, SideBarLinkComponent],
  imports: [
    CommonModule,
    SideBarRoutingModule,
    NgMaterialModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
