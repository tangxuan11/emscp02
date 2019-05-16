import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';

@NgModule({
    declarations: [CampaignComponent],
    imports: [
        CommonModule,
        CampaignRoutingModule
    ],
    exports: [
        CampaignComponent
    ]
})

export class CampaignModule { }
