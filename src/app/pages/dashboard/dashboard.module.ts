import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild([
        {
            path: '',
            component: DashboardComponent
        }
    ])
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
