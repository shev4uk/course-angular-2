import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // intercepter
  // https://stackoverflow.com/questions/47400929/how-to-add-authorization-header-to-angular-http-request

  url = 'http://localhost:8000';
  errors;

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    this.http.get(`${this.url}/events`, { headers: reqHeader }).subscribe( res => {
      console.log(res);
    })
    // filter
    this.http.get(`${this.url}/events?categoryId=1&categoryId=2`, { headers: reqHeader }).subscribe( res => {
      console.log(res);
    })
    // sort
    this.http.get(`${this.url}/events?_sort=price&_order=asc`, { headers: reqHeader }).subscribe( res => {
      console.log(res);
    })
    // range
    this.http.get(`${this.url}/events?price_gte=300&price_lte=500`, { headers: reqHeader }).subscribe( res => {
      console.log(res);
    })
    // search
    this.http.get(`${this.url}/events?q=internet`, { headers: reqHeader }).subscribe( res => {
      console.log(res);
    })
  }

  handleErrors(res) {
    switch(res.status) {
      case 401:
        this.errors = res.message;
    }
  }

  loginUser() {
    this.http.post(`${this.url}/auth/login`, {"email":"bruno@email.com","password":"bruno"})
      .pipe(
        map( data => data ),
        catchError (
          er => {
            console.log(er);
            this.handleErrors(er);
            return throwError(er);
          }
        )
      )
      .subscribe((data) => {
        localStorage.setItem('token', data['access_token']);
        console.log(data);
      })
  }

  regUser() {
    this.http.post(`${this.url}/auth/register`, {"email":"bruno1@email.com","password":"bruno"})
      .pipe(
        map( data => data ),
        catchError (
          er => {
            console.log(er);
            this.handleErrors(er);
            return throwError(er);
          }
        )
      )
      .subscribe((data) => {
        localStorage.setItem('token', data['access_token']);
        console.log(data);
      })
  }
}
