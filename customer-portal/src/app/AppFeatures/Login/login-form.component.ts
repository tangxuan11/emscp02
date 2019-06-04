import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LogInStateService } from "../../Core/Services/log-in-state.service";
import { LogInHttpClientService } from "../../Core/Services/log-in-http-client.service";
import { loginResponse, loginCredential } from "../../Core/Services/ems-interfaces.service"

import { HttpErrorResponse} from '@angular/common/http';


@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

    emsLoginFormModel: FormGroup;

    error:string;
    loginRes: loginResponse[] = [];
    loginCred: loginCredential[] = [];

    loginResult: string = "";
    showLoginError: boolean = false;

    @Output() eventFromLoginForm = new EventEmitter<string>();

    constructor(private loginState: LogInStateService, private loginClient: LogInHttpClientService) {
        this.emsLoginFormModel = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        });
    }

    ngOnInit() {
    }

    //Send Login request using HTTP client service
    loginSend() {
        let uname = this.emsLoginFormModel.value["username"];
        let pword = this.emsLoginFormModel.value["password"];
        this.loginCred = [{"username": uname,
                           "password": pword}];
        this.loginClient.sendLoginHttp(this.loginCred).subscribe(
            responseData => this.handleLoginResponse(responseData),
            (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
    }

    //Handle the response from HTTP server REST service
    handleLoginResponse(response: loginResponse[]) {
        this.loginRes = response;
        this.loginResult = this.loginRes[0]["result"];
        
        if (this.loginResult == "success")
        {
            this.loginState.changeMessage(true);
        }
        else
        {
            this.showLoginError = true;
            this.emsLoginFormModel.reset();
        }
    }

    //When click on Change Password
    changePassword() {
        this.eventFromLoginForm.emit("change_password");
    }

    //When click on Forgot Password
    forgotPassword() {
        this.eventFromLoginForm.emit("forgot_password");
    }

}
