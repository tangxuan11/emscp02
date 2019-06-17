export interface DashboardLink {
    title: string;
    description?: string;
    href?: string;
    icon?: string;
}

export let dashboardLinksTop: DashboardLink[] = [
    {
        title: "Analytics",
        description: "Analyze Traffic Performance",
        href: "/analytics",
        icon: "trending_up"
        //icon: "assets/icons/analytics_thumbnail.png"
    },
    {
        title: "Message Log",
        description: "View messaging history including the delivery status",
        href: "/analytics",
        icon: "list"
        //icon: "assets/icons/message log_thumbnail.png"
    },
    {
        title: "Web Text",
        description: "Send a message from your browser",
        href: "/web_text",
        icon: "chat"
        //icon: "assets/icons/webtext_thumbnail.png"
    }
];

export let dashboardLinksBottom: DashboardLink[] = [
    {
        title: "Registries",
        description: "Manage Opt-in & Opt-out registries",
        href: "/registries",
        icon: "group"
        //icon: "assets/icons/registries_thumbnail.png"
    },
    {
        title: "Campaign",
        description: "Manage & launch campaigns",
        href: "/campaign",
        icon: "send"
        //icon: "assets/icons/campaign_thumbnail.png"
    },
    {
        title: "CMS",
        description: "Customized workflows via templates using Content Management System",
        href: "/cms",
        icon: "donut_small"
        //icon: "assets/icons/cms_thumbnail.png"
    }
];