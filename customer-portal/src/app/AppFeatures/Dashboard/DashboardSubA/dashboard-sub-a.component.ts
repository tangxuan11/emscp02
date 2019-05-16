import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dashboard-sub-a',
    templateUrl: './dashboard-sub-a.component.html',
    styleUrls: ['./dashboard-sub-a.component.scss']
})
export class DashboardSubAComponent implements OnInit {

    @Input() featureTitle: string;
    @Input() featureURL: string;
    @Input() featureDescription: string;
    @Input() featureLogoFileName: string;

    constructor() { }

    ngOnInit() {
    }

}
