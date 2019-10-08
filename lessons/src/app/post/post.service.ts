import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getAllTodo(): Observable<any> {
    return this.http.get(`${environment.urlApi}todos`);
  }
}
