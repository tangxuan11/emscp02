
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

    @Output() eventFromChangePasswordForm = new EventEmitter<string>();
    emsChangePasswordFormModel: FormGroup;

    constructor(private changepasswordclient: ChangePasswordHttpClientService) {
        this.emsChangePasswordFormModel = new FormGroup({
            username: new FormControl(),
            oldpassword: new FormControl(),
            newpassword: new FormControl(),
            confirmpassword: new FormControl()
        });
    }

    ngOnInit() {
    }

    changePasswordSend() {
        let uname = this.emsChangePasswordFormModel.value["username"];
        let opword = this.emsChangePasswordFormModel.value["oldpassword"];
        let npword = this.emsChangePasswordFormModel.value["newpassword"];
        this.changePasswordCred = [{"username": uname,
                           "oldpassword": opword,
                           "newpassword": npword}];
        this.changepasswordclient.sendChangePasswordHttp(this.changePasswordCred).subscribe(data => this.handleChangePasswordResponse(data),
            (err: HttpErrorResponse) => this.error = `Can't get info. Got ${err.message}`);
    }

    handleChangePasswordResponse(da: changePasswordResponse[]) {
        this.changePasswordResult = da[0]["result"];
        
        if (this.changePasswordResult == "success")
        {
            this.loginPage();
        }
        else
        {
            this.showChangePasswordFailure();
            this.emsChangePasswordFormModel.reset();
        }
    }

    loginPage() {
        this.eventFromChangePasswordForm.emit("login_page");
    }

    showChangePasswordFailure() {
        this.showChangePasswordError = true;
    }

}
