import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  url = 'http://localhost:8000';
  errors;

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {

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
        console.log(data);
      })
  }
}
