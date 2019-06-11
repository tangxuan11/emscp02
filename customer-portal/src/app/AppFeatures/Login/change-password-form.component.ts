
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ChangePasswordHttpClientService } from "../../Core/Services/change-password-http-client.service";
import { changePasswordResponse, changePasswordCredential } from "../../Core/Services/ems-interfaces.service"

import { HttpErrorResponse } from '@angular/common/http';

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
    showChangePasswordError: boolean = false;
    changePasswordMessage = "";
    showServerResponse: boolean = false;
    serverResponseMessage = "";

    @Output() eventFromChangePasswordForm = new EventEmitter<string>();
    emsChangePasswordFormModel: FormGroup;

    constructor(private changepasswordclient: ChangePasswordHttpClientService) {
        this.emsChangePasswordFormModel = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email]),
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
            this.showChangePasswordError = true;
            this.showServerResponse = false;
            if (this.emsChangePasswordFormModel.controls.username.hasError('required')) {
                this.changePasswordMessage = "Username can not be empty.";
            } else if (this.emsChangePasswordFormModel.controls.username.hasError('email')) {
                this.changePasswordMessage = "Username needs to be an Email address.";
            } else {
                this.changePasswordMessage = "Unknown error.";
            }
        } else {
            let opwordIsValid: Boolean = this.emsChangePasswordFormModel.controls.oldpassword.valid;
            if (opwordIsValid != true) {
                this.showChangePasswordError = true;
                this.showServerResponse = false;
                if (this.emsChangePasswordFormModel.controls.oldpassword.hasError('required')) {
                    this.changePasswordMessage = "Old password can not be empty.";
                } else {
                    this.changePasswordMessage = "Unknown error.";
                }
            } else {
                let npwordIsValid: Boolean = this.emsChangePasswordFormModel.controls.newpassword.valid;
                if (npwordIsValid != true) {
                    this.showChangePasswordError = true;
                    this.showServerResponse = false;
                    if (this.emsChangePasswordFormModel.controls.newpassword.hasError('required')) {
                        this.changePasswordMessage = "New password can not be empty.";
                    } else {
                        this.changePasswordMessage = "Unknown error.";
                    }
                } else {
                    let cpwordIsValid: Boolean = this.emsChangePasswordFormModel.controls.confirmpassword.valid;
                    if (cpwordIsValid != true) {
                        this.showChangePasswordError = true;
                        this.showServerResponse = false;
                        if (this.emsChangePasswordFormModel.controls.confirmpassword.hasError('required')) {
                            this.changePasswordMessage = "Confirm password can not be empty.";
                        } else {
                            this.changePasswordMessage = "Unknown error.";
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

        if (this.changePasswordResult = "success") {
            this.serverResponseMessage = server_response["statusMsg"];
            this.showServerResponse = true;
            this.showChangePasswordError = false;
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
        this.changePasswordMessage = "Request failed to change password.";
        this.showChangePasswordError = true;
    }

}
