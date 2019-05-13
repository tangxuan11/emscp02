import { Component } from '@angular/core';
import { LogInStateService } from "./Core/Services/log-in-state.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-portal';
  loggedIn:boolean;

  constructor(private data: LogInStateService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.loggedIn = message)
  }
}
