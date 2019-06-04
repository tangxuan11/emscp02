import { Injectable } from '@angular/core';

export interface loginCredential {
    username: string,
    password: string
}

export interface loginResponse {
    username: string,
    result: string
}

export interface changePasswordCredential {
    username: string,
    oldpassword: string,
    newpassword: string
}

export interface changePasswordResponse {
    username: string,
    result: string
}

export interface forgotPasswordCredential {
    username: string
}

export interface forgotPasswordResponse {
    username: string,
    result: string
}

export interface Notification {
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class EmsInterfacesService {

    constructor() { }
}
