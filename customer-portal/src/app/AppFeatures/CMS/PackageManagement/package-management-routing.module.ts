import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackageManagementComponent } from './package-management.component';

const routes: Routes = [
    {
        path: '',
        component: PackageManagementComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageManagementRoutingModule { }
