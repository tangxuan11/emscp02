import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-top-nav-bar-login',
    templateUrl: './top-nav-bar-login.component.html',
    styleUrls: ['./top-nav-bar-login.component.scss']
})
export class TopNavBarLoginComponent implements OnInit {
    topNav = [
        {
            title: "Home"
        },
        {
            title: "About Us",
            subLinks: [
                {
                    title: "About Us"
                },
                {
                    title: "Leadership Team"
                },
                {
                    title: "Awards & Recognitions"
                },
                {
                    title: "Partners"
                },
                {
                    title: "Careers"
                },
            ]
        },
        {
            title: "Enterprise",
            subLinks: [
                {
                    title: "Enterprise"
                },
                {
                    title: "1-Way & 2-Way Messaging"
                },
                {
                    title: "Text-2-Speech"
                },
                {
                    title: "One Time Passcodes"
                },
                {
                    title: "Two Factor Authentication (2-FA)"
                },
                {
                    title: "Campaign Manager"
                },
                {
                    title: "Content Management System"
                },
                {
                    title: "NetSfere"
                },
                {
                    title: "EMS Plus"
                },
                {
                    title: "EMS Flex"
                },
                {
                    title: "EMS API"
                }
            ]
        },
        {
            title: "Carrier",
            subLinks: [
                {
                    title: "Carrier"
                },
                {
                    title: "Rich Communication Services"
                },
                {
                    title: "Personal Messaging Cloud"
                },
                {
                    title: "MMS Center"
                },
                {
                    title: "Short Messaging Service Center"
                },
                {
                    title: "Short Messaging Service Gateway"
                },
                {
                    title: "Public Safety Messaging"
                }
            ]
        },
        {
            title: "Media",
            subLinks: [
                {
                    title: "News"
                },
                {
                    title: "In the News"
                },
                {
                    title: "Messaging Insights"
                },
                {
                    title: "CEO's Corner"
                },
                {
                    title: "CIO e-Book"
                }
            ]
        },
        {
            title: "Support"
        },
        {
            title: "Contact Us"
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
