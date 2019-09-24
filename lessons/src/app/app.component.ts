import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lessons';
  text = '';
  search = '';

  isClass = true;
  isDisabled = false;

  todoList: Todo[] = [{
    id: 1,
    task: 'Вивчити компоненти',
    done: true
  }, {
    id: 2,
    task: 'Зробити домашку',
    done: false
  }, {
    id: 3,
    task: 'Погуляти',
    done: false
  }];

  changeColor() {
    this.isClass = !this.isClass;
    // console.log(this.search);
  }

  doneTask(id) {
    console.log(id);
    let task = this.todoList.find( (item) => item.id === id);
    console.log(task);
    task.done = !task.done;
    console.log(this.todoList);
  }

}
