import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.api_endpoint;

  constructor(private http:HttpClient) { }

  login(data: { username: String, password: String}){
    return this.http.post<any>(`${this.baseUrl}account/login`, data);
  }

  getDashboardData(){
    return this.http.get<any>(`${this.baseUrl}dashboard`);
  }
}
