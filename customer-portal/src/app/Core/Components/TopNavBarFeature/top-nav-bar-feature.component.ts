import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { LogInStateService } from '../../Services/log-in-state.service';

@Component({
    selector: 'app-top-nav-bar-feature',
    templateUrl: './top-nav-bar-feature.component.html',
    styleUrls: ['./top-nav-bar-feature.component.scss']
})
export class TopNavBarFeatureComponent implements OnInit {
    numNotifs: string;
    @Output() toggleSidebar = new EventEmitter<void>();

    constructor(private loginState: LogInStateService) { }

    ngOnInit() {
        this.numNotifs = "1";
    }

    toggleSidebarCollapse(): void {
        this.toggleSidebar.emit();
    }

    logOut() {
        this.loginState.changeMessage(false);
    }
}
