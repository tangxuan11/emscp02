import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './Core/core.module';
import { LoginComponent } from './AppFeatures/Login/login.component';
import { DashboardModule } from './AppFeatures/Dashboard/dashboard.module';
import { AnalyticsModule } from './AppFeatures/Analytics/analytics.module';
import { MessageLogModule } from './AppFeatures/MessageLog/message-log.module';
import { WebTextModule } from './AppFeatures/WebText/web-text.module';
import { RegistriesModule } from './AppFeatures/Registries/registries.module';
import { CampaignModule } from './AppFeatures/Campaign/campaign.module';
import { CMSModule } from './AppFeatures/CMS/cms.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DashboardModule,
    AnalyticsModule,
    MessageLogModule,
    WebTextModule,
    RegistriesModule,
    CampaignModule,
    CMSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
