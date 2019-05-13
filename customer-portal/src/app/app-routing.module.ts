import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './AppFeatures/Analytics/analytics.component';

const routes: Routes = [
  { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
