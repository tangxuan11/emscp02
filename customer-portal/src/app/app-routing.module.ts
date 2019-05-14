import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './AppFeatures/Analytics/analytics.component';
import { DashboardComponent } from './AppFeatures/Dashboard/dashboard.component';
import { MessageLogComponent } from './AppFeatures/MessageLog/message-log.component';
import { WebTextComponent } from './AppFeatures/WebText/web-text.component';
import { RegistriesComponent } from './AppFeatures/Registries/registries.component';
import { CampaignComponent } from './AppFeatures/Campaign/campaign.component';
import { CMSComponent } from './AppFeatures/CMS/cms.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'message_log', component: MessageLogComponent },
  { path: 'web_text', component: WebTextComponent },
  { path: 'registries', component: RegistriesComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'cms', component: CMSComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
