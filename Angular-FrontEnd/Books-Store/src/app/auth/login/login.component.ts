import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // @ViewChild(
  //   NgForm,
  //   {static: true}
  // ) form!: ElementRef<HTMLInputElement>

  constructor(private router: Router, private authService: AuthService) {
    
  }
  
  loginHandler(form: NgForm) {
    if (form.invalid) { return; }
    const userData = {
      email: form.value.email,
      password: form.value.password,
    }

    this.authService.login(userData).subscribe((user) => {
      // this.authService.user = user;
      this.router.navigate(['/'])
    })

    // this.router.navigate(['/']);
  }
}
