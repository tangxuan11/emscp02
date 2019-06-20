export interface SidebarNavLink {
    title: string;
    icon: string;
    iconStyle?: string;
    activeIcon?: string;
    activeIconStyle?: string;
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
            {
                title: "Dashboard",
                icon: "home",
                iconStyle: "outlined",
                activeIconStyle: "filled",
                route: "/dashboard"
            },
            {
                title: "Analytics",
                icon: "trending_up",
                route: "/analytics",
                subPanels: [
                    {
                        title: "Reports",
                        icon: "assessment",
                        iconStyle: "outlined",
                        activeIconStyle: "filled",
                        route: "/analytics/reports",
                        isSubpanel: true
                    },
                    {
                        title: "Usage Summary",
                        icon: "pie_chart",
                        iconStyle: "outlined",
                        activeIconStyle: "filled",
                        route: "/analytics/usage_summary",
                        isSubpanel: true
                    }
                ]
            },
            {
                title: "Message Log",
                icon: "list",
                route: "/message_log"
            },
            {
                title: "Web Text",
                icon: "chat",
                iconStyle: "outlined",
                activeIconStyle: "filled",
                route: "/web_text"
            },
            {
                title: "Registries",
                icon: "group",
                iconStyle: "outlined",
                activeIconStyle: "filled",
                route: "/registries"
            },
            {
                title: "Campaign",
                icon: "send",
                iconStyle: "outlined",
                activeIconStyle: "filled",
                route: "/campaign",
                subPanels: [
                    {
                        title: "Getting Started",
                        icon: "play_circle_outline",
                        iconStyle: "outlined",
                        activeIcon: "play_circle_filled",
                        activeIconStyle: "filled",
                        route: "/campaign/getting_started",
                        isSubpanel: true
                    },
                    {
                        title: "Address Book",
                        icon: "contacts",
                        iconStyle: "outlined",
                        activeIconStyle: "filled",
                        route: "/campaign/address_book",
                        isSubpanel: true
                    },
                    {
                        title: "Templates",
                        icon: "dashboard",
                        iconStyle: "outlined",
                        activeIconStyle: "filled",
                        route: "/campaign/templates",
                        isSubpanel: true
                    },
                    {
                        title: "Campaigns",
                        icon: "send",
                        iconStyle: "outlined",
                        activeIconStyle: "filled",
                        route: "/campaign/campaigns",
                        isSubpanel: true
                    }
                ]
            },
            {
                title: "CMS",
                icon: "donut_small",
                iconStyle: "outlined",
                activeIconStyle: "filled",
                route: "/cms",
                subPanels: [
                    {
                        title: "About",
                        icon: "info",
                        iconStyle: "outlined",
                        activeIconStyle: "filled",
                        route: "/cms/about",
                        isSubpanel: true
                    },
                    {
                        title: "Change Management",
                        icon: "work_outline",
                        activeIcon: "work",
                        route: "/cms/change_management",
                        isSubpanel: true
                    },
                    {
                        title: "Template Editor",
                        icon: "edit",
                        iconStyle: "outlined",
                        activeIconStyle: "filled",
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
                        route: "/cms/package_installation",
                        isSubpanel: true
                    }
                ]
            }
        ]
    },
    {
        panels: [
            {
                title: "Enterprise",
                icon: "domain",
                route: "/enterprise"
            },
            {
                title: "Settings",
                icon: "settings",
                iconStyle: "outlined",
                activeIconStyle: "filled",
                route: "/settings"
            },
            {
                title: "Help",
                icon: "help_outline",
                activeIcon: "help",
                route: "/help"
            }
        ]
    }
];
