import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthorizeComponent } from './pages/unauthorize/unauthorize.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from 'src/core/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UnauthorizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
