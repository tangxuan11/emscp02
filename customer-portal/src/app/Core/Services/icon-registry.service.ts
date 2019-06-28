import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SVGIcon } from './ems-interfaces.service';

@Injectable({
    providedIn: 'root'
})
export class IconRegistryService {
    icons: SVGIcon[] = [
        {
            alias: "analytics",
            url: "assets/icons/analytics_active.svg"
        },
        {
            alias: "analytics_outlined",
            url: "assets/icons/analytics_inactive.svg"
        },
        {
            alias: "breadcrumb",
            url: "assets/icons/breadcrumb_icon.svg"
        },
        {
            alias: "campaign",
            url: "assets/icons/campaign_active.svg"
        },
        {
            alias: "campaign_outlined",
            url: "assets/icons/campaign_inactive.svg"
        },
        {
            alias: "cms",
            url: "assets/icons/cms_active.svg"
        },
        {
            alias: "cms_outlined",
            url: "assets/icons/cms_inactive.svg"
        },
        {
            alias: "dashboard",
            url: "assets/icons/dashboard_active.svg"
        },
        {
            alias: "dashboard_outlined",
            url: "assets/icons/dashboard_inactive.svg"
        },
        {
            alias: "enterprise",
            url: "assets/icons/enterprise_active.svg"
        },
        {
            alias: "enterprise_outlined",
            url: "assets/icons/enterprise_inactive.svg"
        },
        {
            alias: "help",
            url: "assets/icons/faq_active.svg"
        },
        {
            alias: "help_outlined",
            url: "assets/icons/faq_inactive.svg"
        },
        {
            alias: "menu",
            url: "assets/icons/menu_icon.svg"
        },
        {
            alias: "message_log",
            url: "assets/icons/message_log_inactive.svg"
        },
        {
            alias: "notification",
            url: "assets/icons/notification_active.svg"
        },
        {
            alias: "notification_outlined",
            url: "assets/icons/notification_inactive.svg"
        },
        {
            alias: "registries",
            url: "assets/icons/registries_active.svg"
        },
        {
            alias: "registries_outlined",
            url: "assets/icons/registries_inactive.svg"
        },
        {
            alias: "search",
            url: "assets/icons/search_icon.svg"
        },
        {
            alias: "settings_outlined",
            url: "assets/icons/settings_thumbnail.svg"
        },
        {
            alias: "web_text",
            url: "assets/icons/webtext_active.svg"
        },
        {
            alias: "web_text_outlined",
            url: "assets/icons/webtext_inactive.svg"
        }
    ];

    constructor( private iconRegistry: MatIconRegistry,
                 private domSanitizer: DomSanitizer) {

    }

    public registerIcons() {
        let icon : SVGIcon;
        for (icon of this.icons) {
            this.iconRegistry.addSvgIcon(
                icon.alias,
                this.domSanitizer.bypassSecurityTrustResourceUrl(icon.url)
            );
        }
    }
}
