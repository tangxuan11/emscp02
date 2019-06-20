import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forgotPasswordResponse, forgotPasswordCredential } from "./ems-interfaces.service";

@Injectable({
    providedIn: 'root'
})

export class ForgotPasswordHttpClientService {
    forgotPasswordCred: forgotPasswordCredential[] = [];
    forgotPasswordRes: forgotPasswordResponse[] = [];
    forgotPasswordData$: Observable<forgotPasswordResponse[]>;

    forgotPasswordServerURL: string = 'https://ems-portal.mpvm37.mp.ics.com/auth_forgot_tang.php';

    constructor(private httpClient: HttpClient) { }

    sendForgotPasswordHttp(indata: forgotPasswordCredential[]) {
        this.forgotPasswordCred = indata;
        let uname = this.forgotPasswordCred[0]["username"];
        let httpParams = new HttpParams().set("wlUsr", uname).set("wlLogin", "Reset").set("wlFormat", "json");
        this.forgotPasswordData$ = this.httpClient.get<forgotPasswordResponse[]>(this.forgotPasswordServerURL, { params: httpParams });
        return this.forgotPasswordData$;
    }
}
