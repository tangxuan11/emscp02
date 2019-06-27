import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AnalyticsMainTrafficSummaryResponse } from "./ems-interfaces.service";

@Injectable({
  providedIn: 'root'
})
export class AnalyticsGetMainTrafficSummaryService {

  analyticsMainTrafficSummaryData$: Observable<AnalyticsMainTrafficSummaryResponse[]>;

  username: string;

    analyticsMainTrafficSummaryServerURL: string = 'https://ems-portal.mpvm37.mp.ics.com/analytics_tang.php';

    constructor(private httpClient: HttpClient) { }

    sendAnalyticsMainTrafficSummaryHttp(indata: string) {
        this.username = indata;
        let httpParams = new HttpParams()
                                        .set("e", "2019-06-26 23:59:59")
                                        .set("g", "Traffic: Inbound Request Summary")
                                        .set("o", '["total"]')
                                        .set("s", "2019-05-28 00:00:00")
                                        .set("t", "Traffic Summary")
                                        .set("y", "subdomain");
                                      
        this.analyticsMainTrafficSummaryData$ = this.httpClient.get<AnalyticsMainTrafficSummaryResponse[]>(this.analyticsMainTrafficSummaryServerURL, { params: httpParams });
        return this.analyticsMainTrafficSummaryData$;
    }
}


