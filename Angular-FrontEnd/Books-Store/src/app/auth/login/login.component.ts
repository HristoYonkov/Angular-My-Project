import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) {
    
  }
  
  
  loginHandler(from: {email: string, password: string}) {
    this.authService.user = {
      username: 'Pavel',
      email: 'pavel@abv.bg'
    }
    this.router.navigate(['/']);
  }
}
