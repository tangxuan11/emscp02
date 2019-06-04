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

    //Handle the event sent from Login Form component
    receiveEventFromLoginForm($event) {
        if ($event == "change_password") {
            this.changePassword();
        }
        else if ($event == "forgot_password") {
            this.forgotPassword();
        }
    }

    //Handle the event from Change Password component
    receiveEventFromChangePasswordForm($event) {
        if ($event == "login_page") {
            this.loginPage();
        }
    }

    //Handle the event from Forgot Password component
    receiveEventFromForgotPasswordForm($event) {
        if ($event == "login_page") {
            this.loginPage();
        }
    }

    //Display Change Password page
    changePassword() {
        this.showLogin = false;
        this.showForgotPassword = false;
        this.showChangePassword = true;
    }

    //Display Forgot Password page
    forgotPassword() {
        this.showLogin = false;
        this.showChangePassword = false;
        this.showForgotPassword = true;
    }

    //Display Login page
    loginPage() {
        this.showChangePassword = false;
        this.showForgotPassword = false;
        this.showLogin = true;
        this.showLoginError = false;
    }

}
