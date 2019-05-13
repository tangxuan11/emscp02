import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  featureTitle1:string = "Analytics";
  featureDescription1: string = "Analyze Traffic Performance";
  featureLogoFileName1: string = "Logo1";

  featureTitle2:string = "Message Log";
  featureDescription2: string = "View Message History";
  featureLogoFileName2: string = "Logo2";

  featureTitle3:string = "Web Text";
  featureDescription3: string = "Send a message from your browser";
  featureLogoFileName3: string = "Logo3";

  featureTitle4:string = "Registries";
  featureDescription4: string = "Manage Opt-in & Opt-out registries";
  featureLogoFileName4: string = "Logo4";

  featureTitle5:string = "Campaigns";
  featureDescription5: string = "Manage & launch campaigns";
  featureLogoFileName5: string = "Logo5";

  featureTitle6:string = "CMS";
  featureDescription6: string = "Customized workflows via templates using Content Management System";
  featureLogoFileName6: string = "Logo6";

  constructor() { }

  ngOnInit() {
  }

}
