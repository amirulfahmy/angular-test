import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartGraphComponent } from './chart-graph/chart-graph.component';
import { DashboardComponent } from './dashboard.component';
import { PieGraphComponent } from './pie-graph/pie-graph.component';
import { NgChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [
    DashboardComponent,
    PieGraphComponent,
    ChartGraphComponent
  ],
  imports: [
    RouterModule.forChild([
        {
            path: '',
            component: DashboardComponent
        }
    ]),
    CommonModule,
    NgChartsModule
  ]
})
export class DashboardModule { }
