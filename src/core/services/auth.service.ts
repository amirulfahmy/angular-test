import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = environment.access_token_key;

  constructor(
    private router: Router
  ) { }

  get isLoggedIn(): boolean {
    let token = localStorage.getItem(this.storageKey);
    return token !== null ? true : false;
  }

  storeToken(token: string){
    localStorage.setItem(this.storageKey, token);
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
