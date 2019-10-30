import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

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
    return this.http.post(`${this.urlApi}auth/login`, user).pipe(
      map((res) => {
        localStorage.setItem('token', res['access_token']);
        this.router.navigate(['/event'])
        return res;
      })
    );
  }

  registration(user): Observable<any> {
    return this.http.post(`${this.urlApi}auth/register`, user).pipe(
      map((res) => {
        localStorage.setItem('token', res['access_token']);
        this.router.navigate(['/event'])
        return res;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  isLogin() {
    return localStorage.getItem('token') === null;
  }

}
