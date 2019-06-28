import { Component, OnInit } from '@angular/core';

export interface CountryTraffic {
    name: string;
    traffic: number;
    successRate: number;
    failureRate: number;
    noReceiptRate: number;
}

const DUMMY_DATA: CountryTraffic[] = [
    {
        name: "Canada",
        traffic: 3000,
        successRate: 0.98,
        failureRate: 0.01,
        noReceiptRate: 0.01
    },
    {
        name: "United States",
        traffic: 1000,
        successRate: 0.985,
        failureRate: 0.005,
        noReceiptRate: 0.005
    }
]

@Component({
    selector: 'app-country-traffic-summary',
    templateUrl: './country-traffic-summary.component.html',
    styleUrls: ['./country-traffic-summary.component.scss']
})
export class CountryTrafficSummaryComponent implements OnInit {
    channel = "SMS";
    displayColumns: string[] = ['name','traffic_volume','success_rate', 'failure_rate', 'no_receipt'];
    data = DUMMY_DATA;

    constructor() { }

    ngOnInit() {
    }

}