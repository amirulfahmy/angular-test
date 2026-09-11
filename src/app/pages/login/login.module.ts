import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild([
        {
            path: '',
            component: LoginComponent
        }
    ]),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
