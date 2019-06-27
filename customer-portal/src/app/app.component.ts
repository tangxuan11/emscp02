import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LogInStateService } from "./Core/Services/log-in-state.service";
import { IconRegistryService } from "./Core/Services/icon-registry.service";

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

    constructor(private logInState: LogInStateService,
        private breakpointObserver: BreakpointObserver,
        private iconRegistryService: IconRegistryService) {
            this.iconRegistryService.registerIcons();
    }

    ngOnInit() {
        this.logInState.sharedLoginState.subscribe(statusData => {
            this.loggedIn = statusData;
        })
    }

}
