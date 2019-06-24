import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForgotPasswordFormComponent } from './forgot-password-form.component';
import { ChangePasswordFormComponent } from './change-password-form.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    loginResult: string = "";

    showLogin: boolean = true;
    showLoginError: boolean = false;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    //Open the popup for forgot password
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

    openChangePasswordDialog() {
        this.showLogin = false;
        const dialogRef = this.dialog.open(ChangePasswordFormComponent, {
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
            this.openChangePasswordDialog();
        }
        else if ($event == "forgot_password") {
            this.openForgotPasswordDialog();
        }
    }

}
