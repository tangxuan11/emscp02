import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LogInStateService {

    //Get current value of login_state from session storage
    currentState = this.getCurrentState();
    sharedLoginState = new BehaviorSubject(this.currentState);

    //Get current value of login_user from session storage
    currentUser = this.getCurrentUser();
    sharedCurrentUser = new BehaviorSubject(this.currentUser);

    //Used for forgot password => change password
    userName: string = "";
    loginInfo: string = "";

    constructor() {

    }

    //for updating state and user
    changeLoginState(newLoginState: boolean) {
        if (newLoginState == true) {
            sessionStorage.setItem('login_state', 'logged_in');
        } else {
            sessionStorage.setItem('login_state', 'logged_out');
        }
        this.sharedLoginState.next(newLoginState);
    }

    updateLoggedInUser(username: string) {
        sessionStorage.setItem('login_user', username);
        this.sharedCurrentUser.next(username);
    }

    //For session storage
    getCurrentState() {
        let currentLoginState = sessionStorage.getItem('login_state');

        if (currentLoginState == 'logged_in') {
            return true;
        }
        else if (currentLoginState == null) {
            sessionStorage.setItem('login_state', 'logged_out');
            return false;
        } else {
            return false;
        }
    }

    getCurrentUser() {
        let currentUserName = sessionStorage.getItem('login_user');

        if (currentUserName == null) {
            sessionStorage.setItem('login_user', '');
            return '';
        } else {
            return currentUserName;
        }
    }

    //Used for forgot password => change password
    getLoginInfo() {
        return [this.userName, this.loginInfo];
    }

    setLoginInfo(username: string, info: string) {
        this.userName = username;
        this.loginInfo = info;
    }

}
