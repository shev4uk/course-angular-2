import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { ConectService } from './conect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lessons';

  todoList;
  task;

  constructor(
    private todoService: TodoService,
    private conect: ConectService
  ) {

  }

  ngOnInit() {
    this.todoList = this.todoService.getAllTodo();
    this.todoService.getTime().subscribe( (data) => {
      // console.log(data);
    })
  }

  add() {
    this.todoService.addTodo(this.task);
  }

  viewMode(view) {
    this.conect.view.next(view);
  }
}
