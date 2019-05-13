import { Component, OnInit } from '@angular/core';
import { LogInStateService } from "../../Core/Services/log-in-state.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  xt1:boolean = true;
  xt2:boolean = false;

  message:boolean;

  constructor(private data: LogInStateService) {

   }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  login() {
    //alert("click on login");
    this.xt1 = false;
    this.xt2 = true;
    this.data.changeMessage(true)
  }

}
