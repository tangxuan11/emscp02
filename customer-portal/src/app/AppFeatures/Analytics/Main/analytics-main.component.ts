import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AnalyticsGetMainTrafficSummaryService } from "../../../Core/Services/analytics-get-main-traffic-summary.service";
import { AnalyticsMainTrafficSummaryResponse } from "../../../Core/Services/ems-interfaces.service";

@Component({
    selector: 'app-analytics-main',
    templateUrl: './analytics-main.component.html',
    styleUrls: ['./analytics-main.component.scss']
})
export class AnalyticsMainComponent implements OnInit {

    error: string;
    serverResult: string = "";

    constructor(private getTrafficSummaryClient: AnalyticsGetMainTrafficSummaryService) {

     }

    ngOnInit() {
        this.sendRequestForTrafficSummary();
    }

    sendRequestForTrafficSummary() {
        this.getTrafficSummaryClient.sendAnalyticsChannelTrafficSummaryHttp("something").subscribe(data => this.handleTrafficSummaryResponse(data),
            (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
    }

    handleTrafficSummaryResponse(server_response: AnalyticsMainTrafficSummaryResponse[]) {
        
    }

}
