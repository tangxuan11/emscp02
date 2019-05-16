import { Component, OnInit, Input } from '@angular/core';

export interface SidebarNavLink {
    title: string;
    icon: string;
    route?: string;
}

@Component({
  selector: 'app-side-bar-link',
  templateUrl: './side-bar-link.component.html',
  styleUrls: ['./side-bar-link.component.scss']
})
export class SideBarLinkComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() route: string;
  @Input() active: boolean;

  constructor() { }

  ngOnInit() {
  }

}
