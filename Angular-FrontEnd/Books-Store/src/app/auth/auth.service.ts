import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IUser } from '../shared/interfaces/user';

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

  register(userData: {}) {
    return this.http.post<IUser>(apiUrl + '/auth/register', userData)
  }

  login(userData: {}) {
    return this.http.post<any>('/auth/login', userData)
  }

}
