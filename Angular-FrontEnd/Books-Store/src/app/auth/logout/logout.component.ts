import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { removeUser } from 'src/app/shared/authItems';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(private router: Router, private authService: AuthService) {
    localStorage.removeItem('token')
    removeUser()
    this.router.navigate(['/']);
  }
  
}

