import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule,
         MatIconModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatToolbarModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form.component';
import { ChangePasswordFormComponent } from './change-password-form.component';
import { ForgotPasswordFormComponent } from './forgot-password-form.component';

@NgModule({
    declarations: [LoginComponent, LoginFormComponent, ChangePasswordFormComponent, ForgotPasswordFormComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        LoginComponent
    ],
    entryComponents: [
        ForgotPasswordFormComponent
    ]
    
})
export class LoginModule { }
