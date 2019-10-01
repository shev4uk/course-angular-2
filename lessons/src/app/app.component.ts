import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lessons';

  salary = 1000;
  date = new Date();
  text = 'sdjhsdhj sf sfsjhfbhsjf sdf sf';

  products = [{
    name: 'product 1',
    price: 200
  }, {
    name: 'product 2',
    price: 20
  }, {
    name: 'product 3',
    price: 100
  }];
}
