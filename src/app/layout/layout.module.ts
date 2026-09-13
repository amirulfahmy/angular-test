import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedComponentModule } from '../components/shared-components.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    RouterModule.forChild([
        {
            path: '',
            component: LayoutComponent,
            children: [
                {
                    path: "dashboard",
                    data: { title: "Dashboard" },
                    loadChildren: () => import('../pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
                },
                {
                    path: "",
                    redirectTo: "/dashboard",
                    pathMatch: "full"
                },
            ]
        }
    ]),
    SharedComponentModule
  ],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
