import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList = [
    {
      id: 1,
      name: 'Task 1',
      status: false
    },
    {
      id: 2,
      name: 'Task 2',
      status: false
    },
    {
      id: 3,
      name: 'Task 3',
      status: false
    }
  ]

  constructor() { }

  getAllTodo() {
    return this.todoList;
  }

  addTodo(name) {
    console.log(name);
    let lastId = this.todoList[this.todoList.length - 1].id + 1;
    this.todoList.push({id: lastId, name: name, status: false});
    console.log(this.todoList);
  }

  editTodo(id, status) {

  }

  deleteTodo(id) {

  }

  getTime(): Observable<number> {
    return interval(1000);
  }
}
