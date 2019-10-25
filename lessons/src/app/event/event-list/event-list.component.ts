import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events;
  selected = 'option2';

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.eventService.getAllEvent().subscribe( (data) => {
      console.log(data);
      this.events = data;
    });

    this.eventService.eventFilter.subscribe( (data) => {
      console.log(data);
      this.events = data;
    })
  }

  onSortPrice(sort) {
    console.log(sort);
    this.eventService.getEventFilter(
      {
        "_sort": 'price',
        "_order": sort
      }
      );
  }

}
