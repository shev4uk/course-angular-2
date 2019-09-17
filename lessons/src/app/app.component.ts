import { Component } from '@angular/core';

type User = {
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lessons';

  name: string = 'Yurii';
  number = 10;

  some: any = 1;

  arrString: string[] = ['html', 'css', 'js', 'angular'];
  users: User[] = [{
    name: 'Bob',
    age: 20
  }, {
    name: 'Alice',
    age: 21
  }];


}
