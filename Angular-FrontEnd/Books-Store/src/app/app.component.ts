import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Books-Store';

  constructor(private http: HttpClient, private authService: AuthService) {
    if (localStorage.getItem('token')) {
      authService.getUserData().subscribe();
    }
  }
}
