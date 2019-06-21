import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForgotPasswordFormComponent } from './forgot-password-form.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    loginResult: string = "";

    showLogin: boolean = true;
    showChangePassword: boolean = false;
    showLoginError: boolean = false;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    openForgotPasswordDialog() {
        this.showLogin = false;
        const dialogRef = this.dialog.open(ForgotPasswordFormComponent, {
            width: '482px',
            data: {},
            disableClose: true,
            position: {top: '11%'}
        });
        dialogRef.afterClosed().subscribe(result => {
            this.showLogin = true;
        })
    }

    //Handle the event sent from Login Form component
    receiveEventFromLoginForm($event) {
        if ($event == "change_password") {
            this.changePassword();
        }
        else if ($event == "forgot_password") {
            this.openForgotPasswordDialog();
        }
    }

    //Handle the event from Change Password component
    receiveEventFromChangePasswordForm($event) {
        if ($event == "login_page") {
            this.loginPage();
        }
    }

    //Display Change Password page
    changePassword() {
        this.showLogin = false;
        this.showChangePassword = true;
    }

    //Display Login page
    loginPage() {
        this.showChangePassword = false;
        this.showLogin = true;
        this.showLoginError = false;
    }

}
