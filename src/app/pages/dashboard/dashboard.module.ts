import { CommonModule } from '@angular/common';
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
    ]),
    CommonModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
