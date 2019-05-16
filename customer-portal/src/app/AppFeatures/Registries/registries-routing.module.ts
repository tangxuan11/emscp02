import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistriesComponent } from './registries.component';


const routes: Routes = [
    {
        path: '',
        component: RegistriesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistriesRoutingModule { }