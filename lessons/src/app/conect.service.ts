import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectService {

  subject = new Subject();
  view = new BehaviorSubject('list');

  constructor() { }
}
