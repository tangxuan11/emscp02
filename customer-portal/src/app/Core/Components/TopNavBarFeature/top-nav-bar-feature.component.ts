import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { LogInStateService } from '../../Services/log-in-state.service';
import { Notification } from '../../Services/ems-interfaces.service';
import { NotificationsService } from '../../Services/notifications.service';

@Component({
    selector: 'app-top-nav-bar-feature',
    templateUrl: './top-nav-bar-feature.component.html',
    styleUrls: ['./top-nav-bar-feature.component.scss']
})
export class TopNavBarFeatureComponent implements OnInit {
    username: string;
    usernameIsEmail: boolean;
    notifications: Notification[];
    @Output() toggleSidebar = new EventEmitter<void>();

    userName: string = "";

    constructor(private loginState: LogInStateService,
                private notifService: NotificationsService) {
        this.loginState.currentUser$.subscribe( username => {
            this.username = username;
            this.usernameIsEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(username);
        });
    }

    ngOnInit() {
        this.notifService.notifications$.subscribe( notifs => {
            this.notifications = notifs;
        });
    }

    toggleSidebarCollapse(): void {
        this.toggleSidebar.emit();
    }

    logOut() {
        this.notifService.clearNotifications();
        this.loginState.changeMessage(false);
        this.loginState.updateLoggedInUser("");
    }

    addNotif() {
        this.notifService.addNotification({
            title: "Notification " + this.notifications.length,
            message: "Hello, you have a notification here."
        });
    }
}
