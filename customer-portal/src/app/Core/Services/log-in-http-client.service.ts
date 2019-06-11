import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { loginResponse, loginCredential } from "./ems-interfaces.service";

@Injectable({
    providedIn: 'root'
})

export class LogInHttpClientService {

    loginCred: loginCredential[] = [];
    loginRes: loginResponse[] = [];
    loginData$: Observable<loginResponse[]>;

    constructor(private httpClient: HttpClient) { }

    sendLoginHttp(indata:loginCredential[]) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };

        this.loginCred = indata;
        let uname = this.loginCred[0]["username"];
        let pword = this.loginCred[0]["password"];
        
        let httpParams = new HttpParams().set("wlUsr", uname).
                                           set("wlPwd", pword).
                                           set("wlLogin","Login").
                                           set("wlFormat","json");
        this.loginData$ = this.httpClient.get<loginResponse[]>('https://ems-portal.mpvm37.mp.ics.com/auth_tang1.php', { params: httpParams });
        
        return this.loginData$;
    }




}
