import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    @Input() title: string;
    @Input() message: string;
    @Input() icon: string;
    @Input() activeIcon: string;
    active: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  handleNotifClick() {
      this.active = !this.active;
  }

}
