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
                      title: "tmp2",
                      icon: "home",
                      route: "/analytics/tmp2",
                      isSubpanel: true
                  },
                  {
                      title: "tmp3",
                      icon: "home",
                      route: "/analytics/tmp3",
                      isSubpanel: true
                  },
                  {
                      title: "tmp4",
                      icon: "home",
                      route: "/analytics/tmp4",
                      isSubpanel: true
                  },
                  {
                      title: "tmp5",
                      icon: "home",
                      route: "/analytics/tmp5",
                      isSubpanel: true
                  },
                  {
                      title: "tmp1",
                      icon: "home",
                      route: "/analytics/tmp1",
                      isSubpanel: true
                  }
              ]
            },
            { title: "Message Log",
              icon: "list",
              route: "/message_log",
              subPanels: [
                  {
                      title: "tmp2",
                      icon: "home",
                      route: "/analytics/tmp2",
                      isSubpanel: true
                  },
                  {
                      title: "tmp3",
                      icon: "home",
                      route: "/analytics/tmp3",
                      isSubpanel: true
                  },
                  {
                      title: "tmp4",
                      icon: "home",
                      route: "/analytics/tmp4",
                      isSubpanel: true
                  },
                  {
                      title: "tmp5",
                      icon: "home",
                      route: "/analytics/tmp5",
                      isSubpanel: true
                  },
                  {
                      title: "tmp1",
                      icon: "home",
                      route: "/analytics/tmp1",
                      isSubpanel: true
                  }
              ]
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
