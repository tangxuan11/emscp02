import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { LogInStateService } from '../../Services/log-in-state.service';

@Component({
    selector: 'app-top-nav-bar-feature',
    templateUrl: './top-nav-bar-feature.component.html',
    styleUrls: ['./top-nav-bar-feature.component.scss']
})
export class TopNavBarFeatureComponent implements OnInit {
    @Output() toggleSidebar = new EventEmitter<void>();

    constructor(private loginState: LogInStateService) { }

    ngOnInit() {

    }

    toggleSidebarCollapse(): void {
        this.toggleSidebar.emit();
        console.log("toggle sidebar");
    }

    logOut() {
        this.loginState.changeMessage(false);
    }
}
