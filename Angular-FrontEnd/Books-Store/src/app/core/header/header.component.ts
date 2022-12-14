import { Component } from '@angular/core';
import { getUser } from 'src/app/shared/authItems';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }
  
  get isLoggedIn() {
    return localStorage.getItem('token')
  };

  get user() {
    return getUser()
  }

}
