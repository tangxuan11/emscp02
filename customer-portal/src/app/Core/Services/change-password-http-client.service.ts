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
        let cpword = this.changePasswordCred[0]["confirmpassword"];
        let httpParams = new HttpParams().set("wlUsr", uname)
                                         .set("wlPwd", opword)
                                         .set("wlNewPwd", npword)
                                         .set("wlConfPwd", cpword)
                                         .set("wlPasswordChange", "")
                                         .set("wlSubmitPasswordChange", "Submit")
                                         .set("wlFormat", "json");
        this.changePasswordData$ = this.httpClient.get<changePasswordResponse[]>('https://ems-portal.mpvm37.mp.ics.com/auth_reset_tang.php', { params: httpParams });
        return this.changePasswordData$;
    }

}
