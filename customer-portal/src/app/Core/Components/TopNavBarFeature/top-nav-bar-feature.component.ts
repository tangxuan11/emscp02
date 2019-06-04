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
    notifications: Notification[];
    @Output() toggleSidebar = new EventEmitter<void>();

    constructor(private loginState: LogInStateService,
                private notifService: NotificationsService) { }

    ngOnInit() {
        this.notifService.notifications.subscribe( notifs => {
            this.notifications = notifs;
        });
    }

    toggleSidebarCollapse(): void {
        this.toggleSidebar.emit();
    }

    logOut() {
        this.loginState.changeMessage(false);
    }

    addNotif() {
        this.notifService.addNotification({message: "Hello"});
    }
}
