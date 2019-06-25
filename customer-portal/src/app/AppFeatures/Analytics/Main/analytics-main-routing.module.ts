import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsMainComponent } from './analytics-main.component';

const routes: Routes = [{
    path: '',
    component: AnalyticsMainComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnalyticsMainRoutingModule { }
