import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

import { HttpErrorResponse} from '@angular/common/http';

import { LogInStateService } from "../../Core/Services/log-in-state.service";
import { LogInHttpClientService } from "../../Core/Services/log-in-http-client.service";
import { loginResponse, loginCredential } from "../../Core/Services/ems-interfaces.service"

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    emsLoginFormModel: FormGroup;
    emsResetPasswordFormModel: FormGroup;

    error:string;
    loginRes: loginResponse[] =[];
    loginCred: loginCredential[] = [];

    loginResult: string = "";

    showLogin: boolean = true;
    showChangePassword: boolean = false;
    showForgotPassword: boolean = false;
    showLoginError: boolean = false;

    constructor(private data: LogInStateService, private loginclient: LogInHttpClientService) {
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

    loginSend() {
        let uname = this.emsLoginFormModel.value["username"];
        let pword = this.emsLoginFormModel.value["password"];
        this.loginCred = [{"username": uname,
                           "password": pword}];
        this.loginclient.sendLoginHttp(this.loginCred).subscribe(data => this.handleLoginResponse(data),
            (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
    }

    handleLoginResponse(da: loginResponse[]) {
        this.loginRes = da;
        this.loginResult = this.loginRes[0]["result"];
        
        if (this.loginResult == "success")
        {
            this.data.changeMessage(true);
        }
        else
        {
            this.showLoginError = true;
            this.emsLoginFormModel.reset();
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
        this.showLoginError = false;
    }

}
