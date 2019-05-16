import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    featureTitle1: string = "Analytics";
    featureURL1: string = "/analytics";
    featureDescription1: string = "Analyze Traffic Performance";
    featureLogoFileName1: string = "Logo1";

    featureTitle2: string = "Message Log";
    featureURL2: string = "/message_log";
    featureDescription2: string = "View Message History";
    featureLogoFileName2: string = "Logo2";

    featureTitle3: string = "Web Text";
    featureURL3: string = "/web_text";
    featureDescription3: string = "Send a message from your browser";
    featureLogoFileName3: string = "Logo3";

    featureTitle4: string = "Registries";
    featureURL4: string = "/registries";
    featureDescription4: string = "Manage Opt-in & Opt-out registries";
    featureLogoFileName4: string = "Logo4";

    featureTitle5: string = "Campaign";
    featureURL5: string = "/campaign";
    featureDescription5: string = "Manage & launch campaigns";
    featureLogoFileName5: string = "Logo5";

    featureTitle6: string = "CMS";
    featureURL6: string = "/cms";
    featureDescription6: string = "Customized workflows via templates using Content Management System";
    featureLogoFileName6: string = "Logo6";

    constructor() { }

    ngOnInit() {
    }

}
