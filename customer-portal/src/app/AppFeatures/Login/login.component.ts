import { Component, OnInit } from '@angular/core';
import { LogInStateService } from "../../Core/Services/log-in-state.service"

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    message: boolean;

    constructor(private data: LogInStateService) {

    }

    ngOnInit() {
        //this.data.currentMessage.subscribe(message => this.message = message)
    }

    login() {
        this.data.changeMessage(true);
    }

}
