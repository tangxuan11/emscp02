import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, CanActivate } from '@angular/router';
import { AuthGuardService } from './Core/Services/auth-guard.service';

const routes: Routes = [
    { path: 'dashboard', loadChildren: './AppFeatures/Dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'analytics', loadChildren: './AppFeatures/Analytics/Main/analytics-main.module#AnalyticsMainModule' },
    { path: 'analytics/reports', loadChildren: './AppFeatures/Analytics/Reports/reports.module#ReportsModule' },
    { path: 'analytics/usage_summary', loadChildren: './AppFeatures/Analytics/UsageSummary/usage-summary.module#UsageSummaryModule' },
    { path: 'message_log', loadChildren: './AppFeatures/MessageLog/message-log.module#MessageLogModule' },
    { path: 'web_text', loadChildren: './AppFeatures/WebText/web-text.module#WebTextModule' },
    { path: 'registries', loadChildren: './AppFeatures/Registries/registries.module#RegistriesModule' },
    { path: 'campaign', loadChildren: './AppFeatures/Campaign/campaign.module#CampaignModule' },
    { path: 'campaign/getting_started', loadChildren: './AppFeatures/Campaign/GettingStarted/getting-started.module#GettingStartedModule' },
    { path: 'campaign/address_book', loadChildren: './AppFeatures/Campaign/AddressBook/address-book.module#AddressBookModule' },
    { path: 'campaign/templates', loadChildren: './AppFeatures/Campaign/Templates/templates.module#TemplatesModule' },
    { path: 'campaign/campaigns', loadChildren: './AppFeatures/Campaign/Campaigns/campaigns.module#CampaignsModule' },
    { path: 'cms', loadChildren: './AppFeatures/CMS/cms.module#CMSModule' },
    { path: 'cms/about', loadChildren: './AppFeatures/CMS/About/about.module#AboutModule' },
    { path: 'cms/change_management', loadChildren: './AppFeatures/CMS/ChangeManagement/change-management.module#ChangeManagementModule' },
    { path: 'cms/template_editor', loadChildren: './AppFeatures/CMS/TemplateEditor/template-editor.module#TemplateEditorModule' },
    { path: 'cms/package_management', loadChildren: './AppFeatures/CMS/PackageManagement/package-management.module#PackageManagementModule' },
    { path: 'cms/package_installation', loadChildren: './AppFeatures/CMS/PackageInstallation/package-installation.module#PackageInstallationModule' },
    { path: 'enterprise', loadChildren: './AppFeatures/Enterprise/enterprise.module#EnterpriseModule' },
    { path: 'settings', loadChildren: './AppFeatures/Settings/settings.module#SettingsModule' },
    { path: 'help', loadChildren: './AppFeatures/Help/help.module#HelpModule' },

    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];

@NgModule({
    declarations: [],
    //imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules}),],
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
