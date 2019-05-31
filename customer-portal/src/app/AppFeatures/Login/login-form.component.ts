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
    loginRes: loginResponse[] =[];
    loginCred: loginCredential[] = [];

    loginResult: string = "";
    showLoginError: boolean = false;

    @Output() eventFromLoginForm = new EventEmitter<string>();

    constructor(private data: LogInStateService, private loginclient: LogInHttpClientService) {
        this.emsLoginFormModel = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        });
    }

    ngOnInit() {
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
        this.eventFromLoginForm.emit("change_password");
    }

    forgotPassword() {
        this.eventFromLoginForm.emit("forgot_password");
    }

}
