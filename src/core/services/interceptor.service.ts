import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let authReq = request;
    const token = localStorage.getItem('access_token');

    if (token != null) {
      authReq = this.addTokenHeader(request, token);
    }
    
    return next.handle(authReq).pipe(
      catchError( (error: HttpErrorResponse) => {
      console.log(error);
      return throwError(() => error);
    })) as Observable<HttpEvent<any>>;
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {

    if (token) {
      return request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
        }
      })
    } else {
      return request;
    }
  }
}
