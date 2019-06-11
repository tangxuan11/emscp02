import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ForgotPasswordHttpClientService } from "../../Core/Services/forgot-password-http-client.service";
import { forgotPasswordResponse, forgotPasswordCredential } from "../../Core/Services/ems-interfaces.service"

import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'app-forgot-password-form',
    templateUrl: './forgot-password-form.component.html',
    styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {
    error: string;
    forgotPasswordRes: forgotPasswordResponse[] = [];
    forgotPasswordCred: forgotPasswordCredential[] = [];

    forgotPasswordResult: string = "";
    showForgotPasswordError: boolean = false;
    forgotPasswordMessage = "";
    showServerResponse: boolean = false;
    serverResponseMessage = "";

    @Output() eventFromForgotPasswordForm = new EventEmitter<string>();
    emsForgotPasswordFormModel: FormGroup;

    constructor(private ForgotPasswordclient: ForgotPasswordHttpClientService) {
        this.emsForgotPasswordFormModel = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email])
        });
    }

    ngOnInit() {
    }

    forgotPasswordSend() {
        let uname = this.emsForgotPasswordFormModel.value["username"];

        //Validation of username
        let unameIsValid: Boolean = this.emsForgotPasswordFormModel.controls.username.valid;
        if (unameIsValid != true) {
            this.showForgotPasswordError = true;
            if (this.emsForgotPasswordFormModel.controls.username.hasError('required')) {
                this.forgotPasswordMessage = "Username can not be empty.";
            } else if (this.emsForgotPasswordFormModel.controls.username.hasError('email')) {
                this.forgotPasswordMessage = "Username needs to be an Email address.";
            } else {
                this.forgotPasswordMessage = "Unknown error.";
            }
        } else {
            //username in valid format. Now send to server.
            this.forgotPasswordCred = [{
                "username": uname
            }];
            this.ForgotPasswordclient.sendForgotPasswordHttp(this.forgotPasswordCred).subscribe(data => this.handleForgotPasswordResponse(data),
                (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
        }
    }

    handleForgotPasswordResponse(server_response: forgotPasswordResponse[]) {
        this.forgotPasswordResult = server_response["result"];

        if (this.forgotPasswordResult = "success") {
            this.serverResponseMessage = server_response["statusMsg"];
            this.showServerResponse = true;
        }
        else {
            this.showForgotPasswordFailure();
            this.emsForgotPasswordFormModel.reset();
        }
    }

    loginPage() {
        this.eventFromForgotPasswordForm.emit("login_page");
    }

    showForgotPasswordFailure() {
        this.forgotPasswordMessage = "Request failed to reset password.";
        this.showForgotPasswordError = true;
    }
}
