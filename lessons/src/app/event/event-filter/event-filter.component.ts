import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss']
})
export class EventFilterComponent implements OnInit {

  categories;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.eventService.getCategories().subscribe( (data) => {
      this.categories = data;
    });
  }

}
