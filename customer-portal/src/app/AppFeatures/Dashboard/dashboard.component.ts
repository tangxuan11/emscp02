import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { DashboardLink, dashboardLinks } from './dashboard-links';
import { Subscription } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    watcher: Subscription;
    largerScreen: boolean;
    dashboardElements: DashboardLink[][] = dashboardLinks;

    navigationSubscription: any;

    constructor(private router: Router,
                private mediaObserver: MediaObserver) {
        // subscribe to the router events - storing the subscription so we can unsubscribe later.
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            // If it is a NavigationEnd event re-initalise the component
            if (e instanceof NavigationEnd) {
                this.initializeDashboard();
            }
        });

        this.watcher = this.mediaObserver.media$.subscribe( change => {
            let largerScreenSizes: String[] = ['lg','xl'];
            this.largerScreen = largerScreenSizes.includes(change.mqAlias);
        })
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
