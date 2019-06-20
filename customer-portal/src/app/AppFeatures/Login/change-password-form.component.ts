import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { ChangePasswordHttpClientService } from "../../Core/Services/change-password-http-client.service";
import { changePasswordResponse, changePasswordCredential } from "../../Core/Services/ems-interfaces.service";
import { LogInStateService } from "../../Core/Services/log-in-state.service";

@Component({
    selector: 'app-change-password-form',
    templateUrl: './change-password-form.component.html',
    styleUrls: ['./change-password-form.component.scss']
})

export class ChangePasswordFormComponent implements OnInit {
    error: string;
    changePasswordRes: changePasswordResponse[] = [];
    changePasswordCred: changePasswordCredential[] = [];

    changePasswordResult: string = "";
    showChangePasswordInfoMessage: boolean = true;
    changePasswordInfoMessage = "";

    @Output() eventFromChangePasswordForm = new EventEmitter<string>();
    emsChangePasswordFormModel: FormGroup;
    passwordFieldType = {
        old: "password",
        new: "password",
        confirm: "password"
    };

    constructor(private loginState: LogInStateService, private changepasswordclient: ChangePasswordHttpClientService) {
        let loginInfo = this.loginState.getLoginInfo();
        this.changePasswordInfoMessage = loginInfo[1];
        this.emsChangePasswordFormModel = new FormGroup({
            username: new FormControl(loginInfo[0], [Validators.required, Validators.email]),
            oldpassword: new FormControl('', [Validators.required]),
            newpassword: new FormControl('', [Validators.required]),
            confirmpassword: new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
    }

    changePasswordSend() {
        let uname = this.emsChangePasswordFormModel.value["username"];
        let opword = this.emsChangePasswordFormModel.value["oldpassword"];
        let npword = this.emsChangePasswordFormModel.value["newpassword"];
        let cpword = this.emsChangePasswordFormModel.value["confirmpassword"];

        //Validation of username
        let unameIsValid: Boolean = this.emsChangePasswordFormModel.controls.username.valid;
        if (unameIsValid != true) {
            this.showChangePasswordInfoMessage = true;
            if (this.emsChangePasswordFormModel.controls.username.hasError('required')) {
                this.changePasswordInfoMessage = "Username can not be empty.";
            } else if (this.emsChangePasswordFormModel.controls.username.hasError('email')) {
                this.changePasswordInfoMessage = "Username needs to be an Email address.";
            } else {
                this.changePasswordInfoMessage = "Unknown error.";
            }
        } else {
            let opwordIsValid: Boolean = this.emsChangePasswordFormModel.controls.oldpassword.valid;
            if (opwordIsValid != true) {
                this.showChangePasswordInfoMessage = true;
                if (this.emsChangePasswordFormModel.controls.oldpassword.hasError('required')) {
                    this.changePasswordInfoMessage = "Old password can not be empty.";
                } else {
                    this.changePasswordInfoMessage = "Unknown error.";
                }
            } else {
                let npwordIsValid: Boolean = this.emsChangePasswordFormModel.controls.newpassword.valid;
                if (npwordIsValid != true) {
                    this.showChangePasswordInfoMessage = true;
                    if (this.emsChangePasswordFormModel.controls.newpassword.hasError('required')) {
                        this.changePasswordInfoMessage = "New password can not be empty.";
                    } else {
                        this.changePasswordInfoMessage = "Unknown error.";
                    }
                } else {
                    let cpwordIsValid: Boolean = this.emsChangePasswordFormModel.controls.confirmpassword.valid;
                    if (cpwordIsValid != true) {
                        this.showChangePasswordInfoMessage = true;
                        if (this.emsChangePasswordFormModel.controls.confirmpassword.hasError('required')) {
                            this.changePasswordInfoMessage = "Confirm password can not be empty.";
                        } else {
                            this.changePasswordInfoMessage = "Unknown error.";
                        }
                    } else {
                        this.changePasswordCred = [{
                            "username": uname,
                            "oldpassword": opword,
                            "newpassword": npword,
                            "confirmpassword": cpword
                        }];

                        this.changepasswordclient.sendChangePasswordHttp(this.changePasswordCred).subscribe(data => this.handleChangePasswordResponse(data),
                            (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
                    }
                }
            }
        }
    }

    handleChangePasswordResponse(server_response: changePasswordResponse[]) {
        this.changePasswordResult = server_response["result"];

        if (this.changePasswordResult == "success") {
            this.changePasswordInfoMessage = server_response["statusMsg"];
            this.showChangePasswordInfoMessage = true;
        }
        else {
            this.showChangePasswordFailure();
            this.emsChangePasswordFormModel.reset();
        }
    }

    loginPage() {
        this.eventFromChangePasswordForm.emit("login_page");
    }

    showChangePasswordFailure() {
        this.changePasswordInfoMessage = "Request failed to change password.";
        this.showChangePasswordInfoMessage = true;
    }

    togglePasswordVisibility(field: string) {
        switch (field) {
            case 'old':
                this.passwordFieldType.old = (this.passwordFieldType.old === "password") ?
                    "text" : "password";
                break;

            case 'new':
                this.passwordFieldType.new = (this.passwordFieldType.new === "password") ?
                    "text" : "password";
                break;

            case 'confirm':
                this.passwordFieldType.confirm = (this.passwordFieldType.confirm === "password") ?
                    "text" : "password";
                break;
        }
    }

}
