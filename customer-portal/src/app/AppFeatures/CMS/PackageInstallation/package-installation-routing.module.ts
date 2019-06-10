import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackageInstallationComponent } from './package-installation.component';

const routes: Routes = [
    {
        path: '',
        component: PackageInstallationComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageInstallationRoutingModule { }
