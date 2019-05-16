import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrumbTrailComponent } from './CrumbTrail/crumb-trail.component';

@NgModule({
    declarations: [CrumbTrailComponent],
    imports: [
        CommonModule
    ],
    exports: [
        CrumbTrailComponent
    ]
})
export class ComponentsModule { }
