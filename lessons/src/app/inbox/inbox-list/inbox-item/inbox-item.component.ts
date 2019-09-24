import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inbox-item',
  templateUrl: './inbox-item.component.html',
  styleUrls: ['./inbox-item.component.scss']
})
export class InboxItemComponent implements OnInit {

  @Input() emailInput;
  @Output() delEmail = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log(this.emailInput);
  }

  deleteEmail(id) {
    console.log(id);
    this.delEmail.emit(id);
  }

}
