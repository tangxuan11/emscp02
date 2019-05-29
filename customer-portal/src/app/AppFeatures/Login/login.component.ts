import { Component, OnInit } from '@angular/core';
import { LogInStateService } from "../../Core/Services/log-in-state.service";
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {Observable, EMPTY, Subscription} from 'rxjs';
import {catchError} from 'rxjs/operators';

interface loginResponse {
    id: number,
    title: string,
    price: number
  }

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    emsLoginFormModel: FormGroup;
    emsResetPasswordFormModel: FormGroup;

    //products$: Observable<Product[]>;
    error:string;
    loginRes: loginResponse[] =[];
    loginData$: Observable<loginResponse[]>;
    loginSub: Subscription;

    loginResult: string = "";

    showLogin: boolean = true;
    showChangePassword: boolean = false;
    showForgotPassword: boolean = false;

    showLoginError: boolean = false;

    constructor(private data: LogInStateService, private httpClient: HttpClient) {
        this.emsLoginFormModel = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        });
        this.emsResetPasswordFormModel = new FormGroup({
            username: new FormControl(),
            oldpassword: new FormControl(),
            newpassword: new FormControl(),
            confirmpassword: new FormControl()
        });

    }

    ngOnInit() {
        //this.data.currentMessage.subscribe(message => this.message = message)
    }

    login() {
        //let httpParams = new HttpParams().set('title', "TANG");
        //this.products$ = this.httpClient.get<Product[]>('https://ems-portal.mpvm37.mp.ics.com/tang.php',{params:httpParams})
        //.pipe(
        //    catchError( err => {
        //      this.error = `Can't get products. Got ${err.status} from ${err.url}`;
        //      return EMPTY;     // empty observable
        //    }),
        //  );

        let uname = this.emsLoginFormModel.value["username"];
        let pword = this.emsLoginFormModel.value["password"];
        console.log(uname);
        console.log(pword);
        let httpParams = new HttpParams().set("username", uname).set("password", pword);
        this.loginData$ = this.httpClient.get<loginResponse[]>('https://ems-portal.mpvm37.mp.ics.com/tang.php',{params:httpParams});

        this.loginSub = this.loginData$
        .subscribe(data => this.dosth(data),
            (err: HttpErrorResponse) =>
            this.error = `Can't get info. Got ${err.message}`);
        
    }

    dosth(da: loginResponse[]) {
        this.loginRes = da;
        this.loginResult = this.loginRes[0]["result"];
        console.log(this.loginRes[0]["result"]);
        if (this.loginResult == "success")
        {
            this.data.changeMessage(true);
        }
        else
        {
            this.showLoginError = true;
            this.emsLoginFormModel.reset();
            //this.emsLoginFormModel.value["username"] = "";
            //this.emsLoginFormModel.value["password"] = "";
        }
    }

    changePassword() {
        this.showLogin = false;
        this.showForgotPassword = false;
        this.showChangePassword = true;
    }

    forgotPassword() {
        this.showLogin = false;
        this.showChangePassword = false;
        this.showForgotPassword = true;
    }

    loginPage() {
        this.showChangePassword = false;
        this.showForgotPassword = false;
        this.showLogin = true;
    }

}
