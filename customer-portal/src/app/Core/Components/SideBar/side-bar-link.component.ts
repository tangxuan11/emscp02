import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface SidebarNavLink {
    title: string;
    icon: string;
    iconStyle?: string;
    route?: string;
    separator?: boolean;
    isSubpanel?: boolean;
    subPanels?: SidebarNavLink[];
}

@Component({
    selector: 'app-side-bar-link',
    templateUrl: './side-bar-link.component.html',
    styleUrls: ['./side-bar-link.component.scss']
})
export class SideBarLinkComponent implements OnInit {
    @Input() title: string;
    @Input() icon: string;
    @Input() iconStyle: string;
    @Input() route: string;
    @Input() separator: boolean = false;
    @Input() isSubpanel: boolean = false;
    @Input() subPanels: SidebarNavLink[];

    expanded: boolean;
    activeMainPanelName: string;
    @Output() activeMainPanelChange = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
        this.expanded = false;
        if (this.subPanels) this.isSubpanel = false;

        if (this.iconStyle) this.iconStyle = "material-icons-" + this.iconStyle;
        else this.iconStyle = "material-icons";
    }

    @Input() get activeMainPanel() : string {
        return this.activeMainPanelName;
    }

    set activeMainPanel(panelName : string) {
        this.activeMainPanelName = panelName;
        if (this.activeMainPanelName !== this.title)
            this.collapseLink();
        else
            this.activeMainPanelChange.emit(this.title);
    }

    handleLinkClick() : void {
        if (this.activeMainPanel !== this.title)
            this.activeMainPanel = this.title;
        this.toggleExpand();
    }

    toggleExpand() : void {
        if (this.subPanels) this.expanded = !this.expanded;
    }

    expandLink() : void {
        if (this.subPanels)
            this.expanded = true;
    }

    collapseLink() : void {
        this.expanded = false;
    }

}
