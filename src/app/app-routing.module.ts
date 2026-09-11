import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { LoginGuard } from 'src/core/guards/login.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthorizeComponent } from './pages/unauthorize/unauthorize.component';

const routes: Routes = [
  {
    path: "login",
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: "",
    canLoad: [AuthGuard],
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
  },
  {
    path: "unauthorized",
    canLoad: [AuthGuard],
    component: UnauthorizeComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "**",
    canLoad: [AuthGuard],
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
