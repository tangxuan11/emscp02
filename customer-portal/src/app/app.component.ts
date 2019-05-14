import { Component } from '@angular/core';

import { LogInStateService } from "./Core/Services/log-in-state.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-portal';
  loggedIn:boolean = false;

  constructor(private data: LogInStateService) {
    
   }

  ngOnInit() {
    //this.data.currentMessage.subscribe(statusData => {this.loggedIn = statusData})
    this.data.sharedData.subscribe(statusData => {
      this.loggedIn = statusData; 
      })

    alert('app comp');
  }

}
