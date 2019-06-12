import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LogInStateService } from "../../Core/Services/log-in-state.service";
import { LogInHttpClientService } from "../../Core/Services/log-in-http-client.service";
import { loginResponse, loginCredential } from "../../Core/Services/ems-interfaces.service"

import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

    emsLoginFormModel: FormGroup;

    error: string;
    loginRes: loginResponse[] = [];
    loginCred: loginCredential[] = [];

    loginResult: string = "";
    showLoginError: boolean = false;
    loginErrorMessage = "";

    @Output() eventFromLoginForm = new EventEmitter<string>();

    constructor(private loginState: LogInStateService, private loginClient: LogInHttpClientService) {
        this.emsLoginFormModel = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
    }

    //Send Login request using HTTP client service
    loginSend() {
        let uname = this.emsLoginFormModel.value["username"];
        let pword = this.emsLoginFormModel.value["password"];

        //Validation of username
        let unameIsValid: Boolean = this.emsLoginFormModel.controls.username.valid;
        if (unameIsValid != true) {
            this.showLoginError = true;
            if (this.emsLoginFormModel.controls.username.hasError('required')) {
                this.loginErrorMessage = "Username can not be empty.";
            } else if (this.emsLoginFormModel.controls.username.hasError('email')) {
                this.loginErrorMessage = "Username needs to be an Email address.";
            } else {
                this.loginErrorMessage = "Unknown error.";
            }
        } else {
            //Validation of password
            let pwordIsValid: Boolean = this.emsLoginFormModel.controls.password.valid;
            if (pwordIsValid != true) {
                this.showLoginError = true;
                if (this.emsLoginFormModel.controls.password.hasError('required')) {
                    this.loginErrorMessage = "Password can not be empty.";
                } else {
                    this.loginErrorMessage = "Unknown error.";
                }
            } else {
                //Both username and password are in valid format. Now send to server.
                this.loginState.updateLoggedInUser(uname);
                this.loginCred = [{
                    "username": uname,
                    "password": pword
                }];
                this.loginClient.sendLoginHttp(this.loginCred).subscribe(
                    responseData => this.handleLoginResponse(responseData),
                    (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
            }
        }
    }

    //Handle the response from HTTP server REST service
    handleLoginResponse(response: loginResponse[]) {
        this.loginRes = response;
        this.loginResult = this.loginRes["result"];

        if (this.loginResult == "success") {
            this.loginState.changeMessage(true);
        }
        else {
            this.loginState.updateLoggedInUser("");
            this.showLoginError = true;
            this.loginErrorMessage = this.loginRes["statusMsg"];
            this.emsLoginFormModel.reset();
            if (this.loginErrorMessage == "You must change your temporary password before proceeding further.")
            {
                this.changePassword();
            }
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
