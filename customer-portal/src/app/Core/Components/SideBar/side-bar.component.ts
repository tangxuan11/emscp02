import { Component, OnInit } from '@angular/core';

import { SidebarNavGroup, navLinks } from './nav-links';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
    activeMainPanel: string;
    private sideNav: SidebarNavGroup[] = navLinks;

    constructor() { }

    ngOnInit() {

    }
}
