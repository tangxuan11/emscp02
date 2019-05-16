import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: 'dashboard', loadChildren: './AppFeatures/Dashboard/dashboard.module#DashboardModule' },
    { path: 'analytics', loadChildren: './AppFeatures/Analytics/analytics.module#AnalyticsModule' },
    { path: 'message_log', loadChildren: './AppFeatures/MessageLog/message-log.module#MessageLogModule' },
    { path: 'web_text', loadChildren: './AppFeatures/WebText/web-text.module#WebTextModule' },
    { path: 'registries', loadChildren: './AppFeatures/Registries/registries.module#RegistriesModule' },
    { path: 'campaign', loadChildren: './AppFeatures/Campaign/campaign.module#CampaignModule' },
    { path: 'cms', loadChildren: './AppFeatures/CMS/cms.module#CMSModule' },

    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];

@NgModule({
    declarations: [],
    //imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules}),],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
