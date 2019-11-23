import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: no-inferrable-types
  private URL: string = 'http://localhost:3800/api';
  constructor(private http: HttpClient, private router: Router) { }

  register(user) {
    return this.http.post<any>(this.URL + '/register', user);
  }
  login(user) {
    return this.http.post<any>(this.URL + '/login', user);
  }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
