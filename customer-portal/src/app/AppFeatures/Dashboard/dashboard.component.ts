import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { DashboardLink, dashboardLinksTop, dashboardLinksBottom } from './dashboard-links';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

    dashboardElementsTop: DashboardLink[] = dashboardLinksTop;
    dashboardElementsBottom: DashboardLink[] = dashboardLinksBottom;

    navigationSubscription: any;

    constructor(private router: Router) {
        // subscribe to the router events - storing the subscription so we can unsubscribe later. 
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                this.initializeDashboard();
            }
        });
    }

    ngOnInit() {
    }

    initializeDashboard() {
        // Set default values and re-fetch any data you need.

    }
    ngOnDestroy() {
        // avoid memory leaks here by cleaning up after ourselves. If we  
        // don't then we will continue to run our initialiseInvites()   
        // method on every navigationEnd event.
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

}
