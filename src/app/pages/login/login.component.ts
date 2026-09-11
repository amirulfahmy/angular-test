import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/core/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        padding: '.75rem 1.25rem',
        margin: '0 0 1rem 0'
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
  invalidLogin: boolean = false;

  constructor(
    private apiService: ApiService
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
    this.invalidLogin = false;
    this.apiService.login(this.loginForm.getRawValue()).subscribe({
      next: (response: any) => {
        this.invalidLogin = false;
      },
      error: (err: any) => {
        this.invalidLogin = true;
        this.loginForm.enable();

      }
    })
  }

}
