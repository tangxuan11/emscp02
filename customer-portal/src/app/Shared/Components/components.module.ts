import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFeatureTopNavBarComponent } from './AppFeatureTopNavBar/app-feature-top-nav-bar.component';
import { CrumbTrailComponent } from './CrumbTrail/crumb-trail.component';

@NgModule({
  declarations: [AppFeatureTopNavBarComponent, CrumbTrailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AppFeatureTopNavBarComponent,
    CrumbTrailComponent
  ]
})
export class ComponentsModule { }
