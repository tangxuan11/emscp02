import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInStateService {
  sharedData = new BehaviorSubject(false);

  //private messageSource = new BehaviorSubject(false);
  //sharedData = this.messageSource.asObservable();

  constructor() {
    this.sharedData.next(false);
  }

  changeMessage(message: boolean) {
    //this.messageSource.next(message)
    this.sharedData.next(true);
  }
}
