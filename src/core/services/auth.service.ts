import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get isLoggedIn(): boolean {
    let token = localStorage.getItem('access_token');
    return token !== null ? true : false;
  }
}
