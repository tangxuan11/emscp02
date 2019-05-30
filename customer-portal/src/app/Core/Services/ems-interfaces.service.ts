import { Injectable } from '@angular/core';

export interface loginResponse {
  id: number,
  title: string,
  price: number
}

export interface loginCredential {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class EmsInterfacesService {

  constructor() { }
}
