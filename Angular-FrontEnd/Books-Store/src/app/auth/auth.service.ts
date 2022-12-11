import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IUser } from '../shared/interfaces/user';
import { tap } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  get isLogegdIn() {
    return this.user !== null
  }

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get<any>(`${apiUrl}/auth/user`).pipe(tap((userData) => {
      this.user = userData
    }))
  }

  login(userData: {}) {
    return this.http.post<IUser>(apiUrl + '/auth/login', userData).pipe(tap((userData) => {
      this.user = userData
      localStorage.setItem('token', this.user.accessToken)
    }))
  }

  register(userData: {}) {
    return this.http.post<IUser>(apiUrl + '/auth/register', userData).pipe(tap((userData) => {
      this.user = userData
      localStorage.setItem('token', this.user.accessToken)
    }))
  }


}
