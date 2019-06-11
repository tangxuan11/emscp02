import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { forgotPasswordResponse, forgotPasswordCredential } from "./ems-interfaces.service";

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordHttpClientService {
  forgotPasswordCred: forgotPasswordCredential[] = [];
  forgotPasswordRes: forgotPasswordResponse[] = [];
  forgotPasswordData$: Observable<forgotPasswordResponse[]>;

  constructor(private httpClient: HttpClient) { }

  sendForgotPasswordHttp(indata: forgotPasswordCredential[]) {
      this.forgotPasswordCred = indata;
      let uname = this.forgotPasswordCred[0]["username"];
      let httpParams = new HttpParams().set("wlUsr", uname).set("wlLogin","Reset").set("wlFormat","json");
      this.forgotPasswordData$ = this.httpClient.get<forgotPasswordResponse[]>('https://ems-portal.mpvm37.mp.ics.com/auth_forgot_tang.php', { params: httpParams });
      return this.forgotPasswordData$;
  }
}
