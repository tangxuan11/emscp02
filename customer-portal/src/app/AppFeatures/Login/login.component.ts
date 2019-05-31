import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    loginResult: string = "";

    showLogin: boolean = true;
    showChangePassword: boolean = false;
    showForgotPassword: boolean = false;
    showLoginError: boolean = false;

    constructor() {

    }

    ngOnInit() {

    }

    receiveEventFromLoginForm($event) {
        if ($event == "change_password") {
            this.changePassword();
        }
        else if ($event == "forgot_password") {
            this.forgotPassword();
        }
    }

    receiveEventFromChangePasswordForm($event) {
        if ($event == "login_page") {
            this.loginPage();
        }
    }

    receiveEventFromForgotPasswordForm($event) {
        if ($event == "login_page") {
            this.loginPage();
        }
    }

    changePassword() {
        this.showLogin = false;
        this.showForgotPassword = false;
        this.showChangePassword = true;
    }

    forgotPassword() {
        this.showLogin = false;
        this.showChangePassword = false;
        this.showForgotPassword = true;
    }

    loginPage() {
        this.showChangePassword = false;
        this.showForgotPassword = false;
        this.showLogin = true;
        this.showLoginError = false;
    }

}
