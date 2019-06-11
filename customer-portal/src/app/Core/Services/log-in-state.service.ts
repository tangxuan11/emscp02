import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LogInStateService {
    sharedData = new BehaviorSubject(false);

    userName: string = "some_user";

    //private messageSource = new BehaviorSubject(false);
    //sharedData = this.messageSource.asObservable();

    constructor() {

    }

    changeMessage(message: boolean) {
        //this.messageSource.next(message)
        this.sharedData.next(message);
    }

    setUsername(uname: string) {
        this.userName = uname;
    }

    getUsername() {
        return this.userName;
    }
}
