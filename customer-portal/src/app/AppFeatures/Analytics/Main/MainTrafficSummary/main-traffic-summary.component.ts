import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AnalyticsGetMainTrafficSummaryService } from "../../../../Core/Services/analytics-get-main-traffic-summary.service";
import { AnalyticsMainTrafficSummaryResponse } from "../../../../Core/Services/ems-interfaces.service";

@Component({
    selector: 'app-main-traffic-summary',
    templateUrl: './main-traffic-summary.component.html',
    styleUrls: ['./main-traffic-summary.component.scss']
})
export class MainTrafficSummaryComponent implements OnInit {
    dataSource: Object;

    title: string;
    error: string;
    serverResult: string = "";

    ngOnInit() {
    }

    constructor(private getMainTrafficSummaryClient: AnalyticsGetMainTrafficSummaryService) {
        this.title = 'Current Month Traffic Summary';

        this.dataSource = {
            "chart": {
                "caption": "Current Month Traffic Summary",
                "subCaption": "",
                "xAxisname": "",
                "yAxisName": "",
                "numberPrefix": "",
                "theme": "fusion",
                "legendPosition": "right",
                "legendIconSides": "4",
                "legendIconStartAngle": "45",
                "legendIconBorderThickness": "2",
                "captionalignment": "left",
            },
            "categories": []
        }

        this.sendRequestForMainTrafficSummary();

    }

    sendRequestForMainTrafficSummary() {
        this.getMainTrafficSummaryClient.sendAnalyticsMainTrafficSummaryHttp("something").subscribe(data => this.handleMainTrafficSummaryResponse(data),
            (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
    }

    handleMainTrafficSummaryResponse(server_response: AnalyticsMainTrafficSummaryResponse[]) {
        this.dataSource["categories"].push(server_response["categories"]);
        this.dataSource["dataset"] = server_response["dataset"];
    }

}

