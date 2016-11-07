import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { AppState, UserService } from './../../shared';

@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public hasError: boolean;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private appState: AppState
  ) {
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
    this.hasError = false;
  }

  ngOnInit() {}

  public onSubmit(values: Object): void {
    this.submitted = true;
    this.hasError = false;
    if (this.form.valid) {
      this.userService.getToken(this.username.value, this.password.value).subscribe(
        token => {
          localStorage.setItem('token', token.access_token);
          this.appState.state.token = token.access_token;
          this.appState.state.isLoggedIn = true;
          this.router.navigateByUrl('app/dashboard');
        },
        error => {
          this.hasError = true;
          this.submitted = false;
        });
    } else {
      this.submitted = false;
    }
  }
}
