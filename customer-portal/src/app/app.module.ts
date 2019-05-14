import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './Core/core.module';
import { LoginComponent } from './AppFeatures/Login/login.component';
import { DashboardModule } from './AppFeatures/Dashboard/dashboard.module';
import { AnalyticsModule } from './AppFeatures/Analytics/analytics.module';

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
    AnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
