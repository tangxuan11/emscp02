import { Component, OnInit } from '@angular/core';

import { LogInStateService } from '../../Services/log-in-state.service';
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
    private sideNav: SidebarNavGroup[] = [
        {
            heading: "Navigation",
            panels: [
                { title: "Dashboard",
                  icon: "home",
                  iconStyle: "outlined",
                  route: "/dashboard"
                },
                { title: "Analytics",
                  icon: "trending_up",
                  route: "/analytics",
                  subPanels: [
                      {
                          title: "tmp1", icon: "", isSubpanel: true
                      }
                  ]
                },
                { title: "Message Log",
                  icon: "list",
                  route: "/message_log"
                },
                { title: "Web Text",
                  icon: "chat",
                  iconStyle: "outlined",
                  route: "/web_text"
                },
                { title: "Registries",
                  icon: "group",
                  iconStyle: "outlined",
                  route: "/registries"
                },
                { title: "Campaign",
                  icon: "send",
                  iconStyle: "outlined",
                  route: "/campaign"
                },
                { title: "CMS",
                  icon: "donut_small",
                  iconStyle: "outlined",
                  route: "/cms"
                },
                { title: "Enterprise",
                  icon: "domain"
                }
            ]
        },
        {
            heading: "Account",
            panels: [
                { title: "Notifications",
                  icon: "notifications",
                  iconStyle: "outlined",
                },
                { title: "Settings",
                  icon: "settings",
                  iconStyle: "outlined",
                },
                { title: "Help",
                  icon: "help_outline"
                }
            ]
        }
    ];

    constructor(private loginState: LogInStateService) { }

    ngOnInit() {
    }

    logOut() {
        this.loginState.changeMessage(false);
    }

}
