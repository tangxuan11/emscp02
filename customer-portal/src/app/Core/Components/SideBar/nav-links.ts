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
                      icon: "dashboard",
                      iconStyle: "outlined",
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
              route: "/cms",
              subPanels: [
                  {
                      title: "About",
                      icon: "info",
                      iconStyle: "outlined",
                      route: "/cms/about",
                      isSubpanel: true
                  },
                  {
                      title: "Change Management",
                      icon: "work_outline",
                      route: "/cms/change_management",
                      isSubpanel: true
                  },
                  {
                      title: "Template Editor",
                      icon: "edit",
                      iconStyle: "outlined",
                      route: "/cms/template_editor",
                      isSubpanel: true
                  },
                  {
                      title: "Package Management",
                      icon: "web",
                      route: "/cms/package_management",
                      isSubpanel: true
                  },
                  {
                      title: "Package Installation",
                      icon: "launch",
                      iconStyle: "outlined",
                      route: "/cms/package_installation",
                      isSubpanel: true
                  }
              ]
            }
        ]
    },
    {
        panels: [
            { title: "Enterprise",
              icon: "domain",
              route: "/enterprise"
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
