import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LogInStateService {
    sharedData = new BehaviorSubject(false);
    private currentUser = new BehaviorSubject("");
    currentUser$ = this.currentUser.asObservable();

    userName: string = "some_user";
    loginInfo: string = "";

    //private messageSource = new BehaviorSubject(false);
    //sharedData = this.messageSource.asObservable();

    constructor() {

    }

    changeMessage(message: boolean) {
        //this.messageSource.next(message)
        this.sharedData.next(message);
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
}