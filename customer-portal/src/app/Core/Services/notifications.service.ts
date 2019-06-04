import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from './ems-interfaces.service';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    private notificationList: Notification[] = [];
    private notificationSource = new BehaviorSubject<Notification[]>([]);
    notifications = this.notificationSource.asObservable();

    constructor() { }

    addNotification(n: Notification) {
        this.notificationList.push(n);
        this.notificationSource.next(this.notificationList);
    }

    removeNotification(n: Notification) {
        let idx = this.notificationList.indexOf(n);

        if (idx >= 0) {
            this.notificationList.splice(idx,1);
            this.notificationSource.next(this.notificationList);
        }
    }
}
