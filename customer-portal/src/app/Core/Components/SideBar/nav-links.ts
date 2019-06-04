export interface SidebarNavLink {
    title: string;
    icon: string;
    iconStyle?: string;
    route?: string;
    separator?: boolean;
    isSubpanel?: boolean;
    subPanels?: SidebarNavLink[];
}

export interface SidebarNavGroup {
    panels: SidebarNavLink[];
}

export let navLinks = [
    {
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
                      title: "Reports",
                      icon: "assessment",
                      iconStyle: "outlined",
                      route: "/analytics/reports",
                      isSubpanel: true
                  },
                  {
                      title: "Usage Summary",
                      icon: "pie_chart",
                      iconStyle: "outlined",
                      route: "/analytics/usage_summary",
                      isSubpanel: true
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
              route: "/campaign",
              subPanels: [
                  {
                      title: "Getting Started",
                      icon: "play_circle_outline",
                      iconStyle: "outlined",
                      route: "/campaign/getting_started",
                      isSubpanel: true
                  },
                  {
                      title: "Address Book",
                      icon: "contacts",
                      iconStyle: "outlined",
                      route: "/campaign/address_book",
                      isSubpanel: true
                  },
                  {
                      title: "Templates",
                      icon: "web",
                      route: "/campaign/templates",
                      isSubpanel: true
                  },
                  {
                      title: "Campaigns",
                      icon: "send",
                      iconStyle: "outlined",
                      route: "/campaign/campaigns",
                      isSubpanel: true
                  }
              ]
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
