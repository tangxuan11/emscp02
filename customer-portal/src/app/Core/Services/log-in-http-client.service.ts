import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { loginResponse, loginCredential } from "./ems-interfaces.service";

@Injectable({
    providedIn: 'root'
})

export class LogInHttpClientService {

    loginCred: loginCredential[] = [];
    loginRes: loginResponse[] = [];
    loginData$: Observable<loginResponse[]>;

    //loginServerURL: string = 'https://ems-portal.mpvm37.mp.ics.com/auth_tang1.php';
    loginServerURL: string = 'https://ems-portal.mpvm23.mp.ics.com/server/authService.php';

    constructor(private httpClient: HttpClient) { }

    sendLoginHttp(indata: loginCredential[]) {

        this.loginCred = indata;
        let uname = this.loginCred[0]["username"];
        let pword = this.loginCred[0]["password"];

        let httpParams = new HttpParams().set("wlUsr", uname).
            set("wlPwd", pword).
            set("wlLogin", "Login").
            set("wlFormat", "json");
        this.loginData$ = this.httpClient.get<loginResponse[]>(this.loginServerURL, { params: httpParams });

        return this.loginData$;
    }




}
