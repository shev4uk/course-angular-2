import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './models/event.model';
import { Category } from './models/category.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  urlApi = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  getAllEvent(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.urlApi}events`);
  }

  getDetailEvent(id): Observable<Event> {
    return this.http.get<Event>(`${this.urlApi}events/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.urlApi}categories`);
  }
}
