import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ForgotPasswordHttpClientService } from "../../Core/Services/forgot-password-http-client.service";
import { forgotPasswordResponse, forgotPasswordCredential } from "../../Core/Services/ems-interfaces.service"

//dialog data for binding
export interface DialogData {
    dialogText: string;
}

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
    showForgotPasswordInfoMessage: boolean = false;
    forgotPasswordInfoMessage = "";
    emsForgotPasswordFormModel: FormGroup;

    userActionDisabled = false;

    constructor(
        public dialogRef: MatDialogRef<ForgotPasswordFormComponent>,
        private ForgotPasswordclient: ForgotPasswordHttpClientService,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.emsForgotPasswordFormModel = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email])
        });
    }

    onLoginPage(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
    };

    forgotPasswordSend() {
        let uname = this.emsForgotPasswordFormModel.value["username"];

        //Validation of username
        let unameIsValid: Boolean = this.emsForgotPasswordFormModel.controls.username.valid;
        if (unameIsValid != true) {
            this.showForgotPasswordInfoMessage = true;
            if (this.emsForgotPasswordFormModel.controls.username.hasError('required')) {
                this.forgotPasswordInfoMessage = "Username can not be empty.";
            } else if (this.emsForgotPasswordFormModel.controls.username.hasError('email')) {
                this.forgotPasswordInfoMessage = "Username needs to be an Email address.";
            } else {
                this.forgotPasswordInfoMessage = "Unknown error.";
            }
        } else {
            //username in valid format. Now send to server.
            this.forgotPasswordCred = [{
                "username": uname
            }];

            //Disable user action before response from server
            this.userActionDisabled = true;
            
            this.ForgotPasswordclient.sendForgotPasswordHttp(this.forgotPasswordCred).subscribe(data => this.handleForgotPasswordResponse(data),
                (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
        }
    }

    handleForgotPasswordResponse(server_response: forgotPasswordResponse[]) {
        this.forgotPasswordResult = server_response["result"];

        //After receiving response, enable user action again
        this.userActionDisabled = false;

        if (this.forgotPasswordResult == "success") {
            this.forgotPasswordInfoMessage = server_response["statusMsg"];
            this.showForgotPasswordInfoMessage = true;
        }
        else {
            this.showForgotPasswordFailure();
            this.emsForgotPasswordFormModel.reset();
        }
    }

    showForgotPasswordFailure() {
        this.forgotPasswordInfoMessage = "Request failed to reset password.";
        this.showForgotPasswordInfoMessage = true;
    }

    //If Login form is invalid or waiting for response from server, disable Reset button
    isResetButtonDisabled () {
        if (!this.userActionDisabled && this.emsForgotPasswordFormModel.valid)
        {
            return false;
        } else {
            return true;
        }
    }

}
