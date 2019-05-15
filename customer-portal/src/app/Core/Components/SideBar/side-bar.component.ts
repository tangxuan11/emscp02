import { Component, OnInit } from '@angular/core';

import { NavBarDataService } from '../../Services/nav-bar-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  activePanel: string;
  compressed: boolean;

  constructor(private navbarData: NavBarDataService) { }

  ngOnInit() {
    this.navbarData.currentNavbarData.subscribe(data => this.compressed = data.sidebarCollapsed)
  }

}
