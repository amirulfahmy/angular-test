import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/services/api.service';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
      })),
      state('out', style({
        opacity: '0',
        height: '0px',
        width: '0px'
      })),
      transition('in <=> out', animate('0.1s'))
    ])
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  invalidLogin: 'out' | 'in' = 'out';

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  signIn(){
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid){
      return;
    }

    this.loginForm.disable();
    this.invalidLogin = 'out';
    this.apiService.login(this.loginForm.getRawValue()).subscribe({
      next: (response: any) => {
        this.invalidLogin = 'out';
        this.authService.storeToken(response);
        this.router.navigate(['/dashboard']);
        
      },
      error: (err: any) => {
        this.invalidLogin = 'in';
        this.loginForm.enable();

      }
    })
  }

}
