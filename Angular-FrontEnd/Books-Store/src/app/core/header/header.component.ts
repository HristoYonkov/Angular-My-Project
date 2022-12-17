import { Component } from '@angular/core';
import { getUser } from 'src/app/shared/authItems';
import {trigger, transition, style, state, animate} from '@angular/animations'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('500ms ease-in')),
    ])
  ]
})
export class HeaderComponent {
  show = false;

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show
  }

  constructor() { }
  
  get isLoggedIn() {
    return localStorage.getItem('token')
  };

  get user() {
    return getUser()
  }

}
