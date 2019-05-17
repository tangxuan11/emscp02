import { Component, OnInit, Input } from '@angular/core';

export interface SidebarNavLink {
    title: string;
    icon: string;
    route?: string;
    separator?: boolean;
    isSubpanel?: boolean;
    subPanels?: SidebarNavLink[];
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
  @Input() separator: boolean = false;
  @Input() isSubpanel: boolean = false;
  @Input() subPanels: SidebarNavLink[];

  constructor() { }

  ngOnInit() {
      if (this.subPanels) this.isSubpanel = false;
  }

}