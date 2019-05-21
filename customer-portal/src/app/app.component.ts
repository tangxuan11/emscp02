import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LogInStateService } from "./Core/Services/log-in-state.service"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'customer-portal';
    loggedIn: boolean = false;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    constructor(private data: LogInStateService,
                private breakpointObserver: BreakpointObserver) {

    }

    ngOnInit() {
        this.data.sharedData.subscribe(statusData => {
            this.loggedIn = statusData;
        })


    }

}
