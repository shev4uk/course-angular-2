import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi = environment.url;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user): Observable<any> {
    return this.http.post(`${this.urlApi}auth/login`, user);
  }

  registration(user): Observable<any> {
    return this.http.post(`${this.urlApi}auth/register`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
