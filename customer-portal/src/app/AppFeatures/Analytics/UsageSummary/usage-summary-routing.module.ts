import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsageSummaryComponent } from './usage-summary.component';


const routes: Routes = [
    {
        path: '',
        component: UsageSummaryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsageSummaryRoutingModule { }
