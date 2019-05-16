import { Component, OnInit } from '@angular/core';

import { NavBarDataService } from '../../Services/nav-bar-data.service';
import { SidebarNavLink } from './side-bar-link.component';

interface SidebarNavGroup {
    heading: string;
    panels: SidebarNavLink[];
}

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
    activePanel: string;
    compressed: boolean;
    private sideNav: SidebarNavGroup[] = [
        {
            heading: "Navigation",
            panels: [
                { title: "Dashboard",
                  icon: "glyphicon glyphicon-home",
                  route: "/dashboard"
                },
                { title: "Analytics",
                  icon: "glyphicon glyphicon-object-align-bottom",
                  route: "/analytics"
                },
                { title: "Message Log",
                  icon: "glyphicon glyphicon-home",
                  route: "/message_log"
                },
                { title: "Web Text",
                  icon: "glyphicon glyphicon-home",
                  route: "/web_text"
                },
                { title: "Registries",
                  icon: "glyphicon glyphicon-home",
                  route: "/registries"
                },
                { title: "Campaign",
                  icon: "glyphicon glyphicon-home",
                  route: "/campaign"
                },
                { title: "CMS",
                  icon: "glyphicon glyphicon-home",
                  route: "/cms"
                },
                { title: "Enterprise",
                  icon: "glyphicon glyphicon-home",
                }
          ]
      },
      {
          heading: "Account",
          panels: [
              { title: "Notifications",
                icon: "glyphicon glyphicon-home",
              },
              { title: "Settings",
                icon: "glyphicon glyphicon-cog"
              },
              { title: "Help",
                icon: "glyphicon glyphicon-home",
              }
          ]
      }
  ]

    constructor(private navbarData: NavBarDataService) { }

    ngOnInit() {
        this.navbarData.currentNavbarData.subscribe(data => this.compressed = data.sidebarCollapsed)
    }

}
