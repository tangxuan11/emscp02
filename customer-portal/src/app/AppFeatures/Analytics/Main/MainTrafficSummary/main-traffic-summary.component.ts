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
    //this.addCategory();
    //this.addDataSet();

    this.sendRequestForMainTrafficSummary();

  }

  sendRequestForMainTrafficSummary () {
    this.getMainTrafficSummaryClient.sendAnalyticsMainTrafficSummaryHttp("something").subscribe(data => this.handleMainTrafficSummaryResponse(data),
                (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
  }

  handleMainTrafficSummaryResponse (server_response: AnalyticsMainTrafficSummaryResponse[]) {
    this.serverResult = server_response["categories"]["category"][0]["label"];
    this.dataSource["categories"].push(server_response["categories"]);
    this.dataSource["dataset"] = server_response["dataset"];

  }


  addCategory() {
    this.dataSource['categories'] = [{'category': [{
          "label": "East"
        }, {
          "label": "West"
        }, {
          "label": "South"
        }, {
          "label": "North"
        }]}];
    }
  
  addDataSet () {
    this.dataSource['dataset'] = [{
        "seriesName": "Actual Expenses",
        "renderAs": "line",
        "data": [{
          "value": "1441290"
        }, {
          "value": "855912"
        }, {
          "value": "911404"
        }, {
          "value": "648136"
        }]
      }, {
        "seriesName": "Budgeted Expenses",
        "renderAs": "line",
        "data": [{
          "value": "1297430"
        }, {
          "value": "776485"
        }, {
          "value": "685352"
        }, {
          "value": "726791"
        }]
      }, {
        "seriesName": "Unknown liabilities",
        "renderAs": "line",
        "data": [{
          "value": "143860"
        }, {
          "value": "79427"
        }, {
          "value": "226052"
        }, {
          "value": "78655"
        }]
      }]
    };

  }
  
