import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LogInStateService {

    currentState = this.getCurrentState();

    sharedData = new BehaviorSubject(this.currentState);
    private currentUser = new BehaviorSubject("");
    currentUser$ = this.currentUser.asObservable();

    userName: string = "some_user";
    loginInfo: string = "";

    //private messageSource = new BehaviorSubject(false);
    //sharedData = this.messageSource.asObservable();

    constructor() {

    }

    changeLoginState(newLoginState: boolean) {
        //this.messageSource.next(message)
        if (newLoginState == true) {
            sessionStorage.setItem('login_state', 'logged_in');
        } else {
            sessionStorage.setItem('login_state', 'logged_out');
        }
        this.sharedData.next(newLoginState);
    }

    updateLoggedInUser(username: string) {
        this.currentUser.next(username);
    }

    getLoginInfo() {
        return [this.userName, this.loginInfo];
    }

    setLoginInfo(username: string, info: string) {
        this.userName = username;
        this.loginInfo = info;
    }

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
}
