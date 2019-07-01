import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AnalyticsGetMainTrafficSummaryService } from "../../../../Core/Services/analytics-get-main-traffic-summary.service";
import { AnalyticsMainTrafficSummaryResponse } from "../../../../Core/Services/ems-interfaces.service";
import { element } from '@angular/core/src/render3';

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
                "subCaption": "",
                "xAxisname": "",
                "yAxisName": "",
                "numberPrefix": "",
                "theme": "fusion",
                "axisonleft": "0",
                "drawCustomLegend":"1",
                "legendPosition": "right",
                "legendIconSides": "4",
                "legendIconStartAngle": "45",
                "legendIconBorderThickness": "2",
                "captionalignment": "left",
                "showYAxisValues" : "1",
                "showLegend": "1"
            },
            "categories": []
        }

        this.sendRequestForMainTrafficSummary();


    }

    render1 () {
        this.dataSource["dataset"][6]["initiallyHidden"] = "0";
    }

    render2 () {
        this.dataSource["dataset"][6]["initiallyHidden"] = "1";
    }

    sendRequestForMainTrafficSummary() {
        this.getMainTrafficSummaryClient.sendAnalyticsMainTrafficSummaryHttp("something").subscribe(data => this.handleMainTrafficSummaryResponse(data),
            (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
    }

    handleMainTrafficSummaryResponse(server_response: AnalyticsMainTrafficSummaryResponse[]) {
        this.dataSource["categories"].push(server_response["categories"]);
        //this.dataSource["dataset"] = server_response["dataset"];
        this.dataSource["dataset"] = this.get_sample_dataset();
    }

    sample_dataset =
        [
            {
                "seriesName": "SMS",
                "color": "#4a90e2",
                "initiallyHidden": "1",
                "data": []
            },
            {
                "seriesName": "MMS",
                "color": "#7ed321",
                "initiallyHidden": "1",
                "data": []
            },
            {
                "seriesName": "EMAIL",
                "color": "#ffe50b",
                "initiallyHidden": "1",
                "data": []
            },
            {
                "seriesName": "PUSH",
                "color": "#f5a623",
                "initiallyHidden": "1",
                "data": []
            },
            {
                "seriesName": "NUMBER LOOKUP",
                "color": "#bd10e0",
                "initiallyHidden": "1",
                "data": []
            },
            {
                "seriesName": "TEXT-2-SPEECH",
                "color": "#4a4de2",
                "initiallyHidden": "1",
                "data": []
            },
            {
                "seriesName": "ALL CHANNELS",
                "color": "#ff0000",
                "initiallyHidden": "0",
                "data": []
            }
        ];

    get_sample_dataset() {
        for (var j = 0; j < 7; j++) {
            let sample_data = [];
            let val = 0;
            for (var i = 0; i < 30; i++) {
                if (j != 6) {
                val = Math.floor((Math.random() * 1000) + 100);
                }
                else {
                val = Math.floor((Math.random() * 6000) + 1000);
                }
                sample_data.push({ "value": val });
            };
            this.sample_dataset[j]["data"] = sample_data;

        };

        return this.sample_dataset;
    }
}
