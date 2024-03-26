import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {
  email: string;
  password: string;
  @ViewChild('emailField') emailField: NgModel | undefined;
  @ViewChild('passwordField') passwordField: NgModel | undefined;
  formValid: boolean = false;
  formIncomplete: boolean = false;

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }

  login() {
    if (this.email && this.password && this.emailField?.valid && this.passwordField?.valid) {
      this.formValid = true;
      this.formIncomplete = false;
      this.router.navigate(['/menu']);
    } else {
      this.formValid = false;
      this.formIncomplete = true;
    }
    
    
  }
}
