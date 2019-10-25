import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss']
})
export class EventFilterComponent implements OnInit {

  min = 0;
  max = 500;
  thumbLabel = true;
  categories;
  categoryIds = [];

  searchInput = new Subject();

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.eventService.getCategories().subscribe( (data) => {
      this.categories = data;
    });

    this.searchInput.pipe(debounceTime(500)).subscribe( (search) => {
      let req = {q: search};
      this.eventService.getEventFilter(req);
    });
  }

  onSearch(s) {
    this.searchInput.next(s.target.value);
  }

  onCheckCategory(check, id) {
    if(check.checked) {
      this.categoryIds.push(id);
    } else {
      let index = this.categoryIds.findIndex( (item) => item === id);
      this.categoryIds.splice(index, 1);
    }
    this.eventService.getEventFilter({categoryId: this.categoryIds});
    console.log(this.categoryIds);
  }

  onChangePrice(price) {
    console.log(price)
    this.eventService.getEventFilter(
      {
        price_gte: 0,
        price_lte: price.value,
      });
  }

}
