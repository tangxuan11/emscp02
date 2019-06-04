import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from './ems-interfaces.service';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    private notifications: Notification[] = [];
    private notificationSource = new BehaviorSubject<Notification[]>([]);
    notifications$ = this.notificationSource.asObservable();

    constructor() { }

    addNotification(n: Notification) {
        this.notifications.push(n);
        this.notificationSource.next(this.notifications);
    }

    removeNotification(n: Notification) {
        let idx = this.notifications.indexOf(n);

        if (idx >= 0) {
            this.notifications.splice(idx,1);
            this.notificationSource.next(this.notifications);
        }
    }

    clearNotifications() {
        this.notifications = [];
        this.notificationSource.next([]);
    }
}
