import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { changePasswordResponse, changePasswordCredential } from "./ems-interfaces.service";

@Injectable({
    providedIn: 'root'
})
export class ChangePasswordHttpClientService {
    changePasswordCred: changePasswordCredential[] = [];
    changePasswordRes: changePasswordResponse[] = [];
    changePasswordData$: Observable<changePasswordResponse[]>;

    constructor(private httpClient: HttpClient) { }

    sendChangePasswordHttp(indata: changePasswordCredential[]) {
        this.changePasswordCred = indata;
        let uname = this.changePasswordCred[0]["username"];
        let opword = this.changePasswordCred[0]["oldpassword"];
        let npword = this.changePasswordCred[0]["newpassword"];
        let httpParams = new HttpParams().set("username", uname).set("oldpassword", opword).set("newpassword", npword);
        this.changePasswordData$ = this.httpClient.get<changePasswordResponse[]>('https://ems-portal.mpvm37.mp.ics.com/tang1.php', { params: httpParams });
        return this.changePasswordData$;
    }

}
