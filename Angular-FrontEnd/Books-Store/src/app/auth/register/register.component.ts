import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setUser } from 'src/app/shared/authItems';
import { matchPaswords } from 'src/app/shared/validators/samePassValidator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fB.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    pass: this.fB.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      repass: []
    }, {
      validators: [matchPaswords('password', 'repass')]
    }),
  })

  constructor(private fB: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler() {
    if (this.form.invalid) { return; }
    const userData = {
      username: this.form.value.username,
      email: this.form.value.email,
      password:this.form.value.pass?.password,
      repass: this.form.value.pass?.repass
    }
    this.authService.register(userData).subscribe((user) => {
      setUser(user)
      this.router.navigate(['/'])
    })
  }

}
