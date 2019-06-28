import { Component, OnInit, OnChanges } from '@angular/core';

export interface ChannelTraffic {
    name: string;
    color: string;
    traffic: number;
    successRate: number;
}

const DUMMY_DATA: ChannelTraffic[] = [
    {color: "#4a90e2", name: "SMS", traffic: 2000, successRate: 0.95},
    {color: "#7ed321", name: "MMS", traffic: 1000, successRate: 0.95},
    {color: "#ffe50b", name: "EMAIL", traffic: 700, successRate: 1},
    {color: "#f5a623", name: "PUSH", traffic: 100, successRate: 1},
    {color: "#bd10e0", name: "NUMBER LOOKUP", traffic: 100, successRate: -1},
    {color: "#4a4de2", name: "TEXT-2-SPEECH", traffic: 100, successRate: 0.98}
]

@Component({
    selector: 'app-channel-traffic-summary',
    templateUrl: './channel-traffic-summary.component.html',
    styleUrls: ['./channel-traffic-summary.component.scss']
})
export class ChannelTrafficSummaryComponent implements OnInit, OnChanges {
    displayColumns: string[] = ['name','traffic_volume','success_rate'];
    data: ChannelTraffic[];
    totalTraffic: number = 0;
    mostTrafficDigits: number = 1;

    constructor() {
        this.data = DUMMY_DATA;
    }

    ngOnChanges() {
        for (let channel of this.data) {
            this.totalTraffic += channel.traffic;
            let numTrafficDigits = channel.traffic.toString().length;
            if (numTrafficDigits > this.mostTrafficDigits)
                this.mostTrafficDigits = numTrafficDigits;
        }
    }

    ngOnInit() {
        for (let channel of this.data) {
            this.totalTraffic += channel.traffic;
            let numTrafficDigits = channel.traffic.toString().length;
            if (numTrafficDigits > this.mostTrafficDigits)
                this.mostTrafficDigits = numTrafficDigits;
        }
    }

}
