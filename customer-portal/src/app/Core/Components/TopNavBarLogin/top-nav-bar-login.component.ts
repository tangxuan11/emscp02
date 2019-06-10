import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-top-nav-bar-login',
    templateUrl: './top-nav-bar-login.component.html',
    styleUrls: ['./top-nav-bar-login.component.scss']
})
export class TopNavBarLoginComponent implements OnInit {
    topNav = [
        {
            title: "Home",
            href: "https://infinite-convergence.com/index"
        },
        {
            title: "About Us",
            subLinks: [
                {
                    title: "About Us",
                    href: "https://infinite-convergence.com/aboutus"
                },
                {
                    title: "Leadership Team",
                    href: "https://infinite-convergence.com/leadership-team"
                },
                {
                    title: "Awards & Recognitions",
                    href: "https://infinite-convergence.com/awards"
                },
                {
                    title: "Partners",
                    href: "https://infinite-convergence.com/partners"
                },
                {
                    title: "Careers",
                    href: "https://infinite-convergence.com/careers"
                },
            ]
        },
        {
            title: "Enterprise",
            subLinks: [
                {
                    title: "Enterprise",
                    href: "https://infinite-convergence.com/enterprise-messaging-service"
                },
                {
                    title: "1-Way & 2-Way Messaging",
                    href: "https://infinite-convergence.com/1-Way-and-2-Way-Messaging"
                },
                {
                    title: "Text-2-Speech",
                    href: "https://infinite-convergence.com/Text-2-Speech"
                },
                {
                    title: "One Time Passcodes",
                    href: "https://infinite-convergence.com/One-Time-Passcodes"
                },
                {
                    title: "Two Factor Authentication (2-FA)",
                    href: "https://infinite-convergence.com/Two-Factor-Authentication"
                },
                {
                    title: "Campaign Manager",
                    href: "https://infinite-convergence.com/campaign-manager"
                },
                {
                    title: "Content Management System",
                    href: "https://infinite-convergence.com/Content-Management-System"
                },
                {
                    separator: true
                },
                {
                    title: "NetSfere",
                    href: "http://www.netsfere.com"
                },
                {
                    title: "EMS Plus",
                    href: "https://www.infinite-convergence.com/enterprise-messaging-service-plus"
                },
                {
                    title: "EMS Flex",
                    href: "https://www.infinite-convergence.com/ems-flex"
                },
                {
                    title: "EMS API",
                    href: "https://www.infinite-convergence.com/ems-api"
                }
            ]
        },
        {
            title: "Carrier",
            subLinks: [
                {
                    title: "Carrier",
                    href: "https://www.infinite-convergence.com/carrier"
                },
                {
                    title: "Rich Communication Services",
                    href: "https://www.infinite-convergence.com/rich-communication-suite"
                },
                {
                    title: "Personal Messaging Cloud",
                    href: "https://www.infinite-convergence.com/personal-messaging-cloud"
                },
                {
                    title: "MMS Center",
                    href: "https://www.infinite-convergence.com/mmsc"
                },
                {
                    title: "Short Messaging Service Center",
                    href: "https://www.infinite-convergence.com/smsc"
                },
                {
                    title: "Short Messaging Service Gateway",
                    href: "https://www.infinite-convergence.com/sms-gateway"
                },
                {
                    title: "Public Safety Messaging",
                    href: "https://www.infinite-convergence.com/public-safety-multimedia-messaging"
                }
            ]
        },
        {
            title: "Media",
            subLinks: [
                {
                    title: "News",
                    href: "https://www.infinite-convergence.com/news"
                },
                {
                    title: "In the News",
                    href: "https://www.infinite-convergence.com/in-the-news"
                },
                {
                    title: "Messaging Insights",
                    href: "https://infinite-convergence.com/messaging_insights"
                },
                {
                    title: "CEO's Corner",
                    href: "https://infinite-convergence.com/anurag_lal_ceos_corner"
                },
                {
                    title: "CIO e-Book",
                    href: "https://infinite-convergence.com/CIO_e-Book"
                }
            ]
        },
        {
            title: "Support",
            href: "https://www.infinite-convergence.com/support"
        },
        {
            title: "Contact Us",
            href: "https://www.infinite-convergence.com/contact"
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
