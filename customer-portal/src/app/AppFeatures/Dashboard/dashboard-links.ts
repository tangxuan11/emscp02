export interface DashboardLink {
    title: string;
    description?: string;
    href?: string;
    icon?: string;
}

// Each sub-array is a row of links on the dashboard
export let dashboardLinks: DashboardLink[][] = [
    [
        {
            title: "Analytics",
            description: "Analyze Traffic Performance",
            href: "/analytics",
            icon: "analytics_outlined"
        },
        {
            title: "Message Log",
            description: "View messaging history including the delivery status",
            href: "/analytics",
            icon: "message_log"
        },
        {
            title: "Web Text",
            description: "Send a message from your browser",
            href: "/web_text",
            icon: "web_text_outlined"
        }
    ],
    [
        {
            title: "Registries",
            description: "Manage Opt-in & Opt-out registries",
            href: "/registries",
            icon: "registries_outlined"
        },
        {
            title: "Campaign",
            description: "Manage & launch campaigns",
            href: "/campaign",
            icon: "campaign_outlined"
        },
        {
            title: "CMS",
            description: "Customized workflows via templates using Content Management System",
            href: "/cms",
            icon: "cms_outlined"
        }
    ]
];
