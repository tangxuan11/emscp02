import { Component, OnInit } from '@angular/core';

import { DashboardLink, dashboardLinksTop, dashboardLinksBottom } from './dashboard-links';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    dashboardElementsTop: DashboardLink[] = dashboardLinksTop;
    dashboardElementsBottom: DashboardLink[] = dashboardLinksBottom;

    /*
    featureTitle1: string = "Analytics";
    featureURL1: string = "/analytics";
    featureDescription1: string = "Analyze Traffic Performance";
    featureLogoFileName1: string = "assets/icons/analytics_thumbnail.png";

    featureTitle2: string = "Message Log";
    featureURL2: string = "/message_log";
    featureDescription2: string = "View Message History";
    featureLogoFileName2: string = "assets/icons/message log_thumbnail.png";

    featureTitle3: string = "Web Text";
    featureURL3: string = "/web_text";
    featureDescription3: string = "Send a message from your browser";
    featureLogoFileName3: string = "assets/icons/webtext_thumbnail.png";

    featureTitle4: string = "Registries";
    featureURL4: string = "/registries";
    featureDescription4: string = "Manage Opt-in & Opt-out registries";
    featureLogoFileName4: string = "assets/icons/registries_thumbnail.png";

    featureTitle5: string = "Campaign";
    featureURL5: string = "/campaign";
    featureDescription5: string = "Manage & launch campaigns";
    featureLogoFileName5: string = "assets/icons/campaign_thumbnail.png";

    featureTitle6: string = "CMS";
    featureURL6: string = "/cms";
    featureDescription6: string = "Customized workflows via templates using Content Management System";
    featureLogoFileName6: string = "assets/icons/cms_thumbnail.png";

    */

    constructor() { }

    ngOnInit() {
    }

}
