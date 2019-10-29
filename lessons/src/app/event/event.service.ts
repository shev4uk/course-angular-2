import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Event } from './models/event.model';
import { Category } from './models/category.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventFilter = new Subject();

  urlApi = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  getAllEvent(): Observable<Event[]> {
    // const reqHeader = new HttpHeaders({ 
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + localStorage.getItem('token')
    // });
    return this.http.get<Event[]>(`${this.urlApi}events`);
  }

  getDetailEvent(id): Observable<Event> {
    return this.http.get<Event>(`${this.urlApi}events/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.urlApi}categories`);
  }

  getEventFilter(request) {
    this.http.get<Event>(`${this.urlApi}events`, {params: request}).subscribe( (data) => {
      this.eventFilter.next(data);
    });
  }
}
