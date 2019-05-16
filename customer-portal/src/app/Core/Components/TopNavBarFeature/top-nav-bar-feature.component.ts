import { Component, OnInit } from '@angular/core';

import { NavBarDataService } from '../../Services/nav-bar-data.service';

@Component({
    selector: 'app-top-nav-bar-feature',
    templateUrl: './top-nav-bar-feature.component.html',
    styleUrls: ['./top-nav-bar-feature.component.scss']
})
export class TopNavBarFeatureComponent implements OnInit {
    collapsedSidebar: boolean;

    constructor(private navbarData: NavBarDataService) { }

    ngOnInit() {
        this.navbarData.currentNavbarData.subscribe(data => this.collapsedSidebar = data.sidebarCollapsed);
    }

    toggleSidebarCollapse(): void {
        this.navbarData.collapseSidebar(!this.collapsedSidebar);
    }
}
