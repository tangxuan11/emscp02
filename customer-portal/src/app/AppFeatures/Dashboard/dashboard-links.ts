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
    },
    {
        title: "Message Log",
        description: "View messaging history including the delivery status",
        href: "/analytics",
        icon: "list"
    },
    {
        title: "Web Text",
        description: "Send a message from your browser",
        href: "/web_text",
        icon: "chat"
    }
];

export let dashboardLinksBottom: DashboardLink[] = [
    {
        title: "Registries",
        description: "Manage Opt-in & Opt-out registries",
        href: "/registries",
        icon: "group"
    },
    {
        title: "Campaign",
        description: "Manage & launch campaigns",
        href: "/campaign",
        icon: "send"
    },
    {
        title: "CMS",
        description: "Customized workflows via templates using Content Management System",
        href: "/cms",
        icon: "donut_small"
    }
];