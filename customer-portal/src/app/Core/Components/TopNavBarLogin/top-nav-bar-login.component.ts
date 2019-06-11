import { Component, OnInit } from '@angular/core';
import { TopbarLoginNavLink, navLinks } from './nav-links';

@Component({
    selector: 'app-top-nav-bar-login',
    templateUrl: './top-nav-bar-login.component.html',
    styleUrls: ['./top-nav-bar-login.component.scss']
})
export class TopNavBarLoginComponent implements OnInit {
    topNav : TopbarLoginNavLink[] = navLinks;

    constructor() { }

    ngOnInit() {
    }

}
