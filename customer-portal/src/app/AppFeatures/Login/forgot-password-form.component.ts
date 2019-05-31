import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

    @Output() eventFromForgotPasswordForm = new EventEmitter<string>();
    emsForgotPasswordFormModel: FormGroup;

    constructor(private ForgotPasswordclient: ForgotPasswordHttpClientService) {
        this.emsForgotPasswordFormModel = new FormGroup({
            username: new FormControl()
        });
    }

    ngOnInit() {
    }

    forgotPasswordSend() {
        let uname = this.emsForgotPasswordFormModel.value["username"];
        this.forgotPasswordCred = [{
            "username": uname
        }];
        this.ForgotPasswordclient.sendForgotPasswordHttp(this.forgotPasswordCred).subscribe(data => this.handleForgotPasswordResponse(data),
            (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
    }

    handleForgotPasswordResponse(da: forgotPasswordResponse[]) {
        this.forgotPasswordResult = da[0]["result"];

        if (this.forgotPasswordResult == "success") {
            this.loginPage();
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
        this.showForgotPasswordError = true;
    }
}
