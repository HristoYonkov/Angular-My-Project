import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
      repass:[]
    }, {
      validators: []
    }),
  })

  constructor(private fB: FormBuilder) { }

  registerHandler(form: any) {
    console.log(form); 
  }

}
