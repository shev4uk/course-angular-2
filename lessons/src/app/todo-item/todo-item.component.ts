import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo;
  @Output() donetask = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // debugger;
    // console.log(this.todo);
  }

  changeStatus(id) {
    console.log(id);
    this.donetask.emit(id);
  }

}
