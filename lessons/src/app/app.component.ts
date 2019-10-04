import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lessons';

  search = '';

  user = {
    email: '',
    password: '',
    gender: ''
  }

  onSearch() {
    console.log(this.search);
    this.search = '';
  }

  onSubmit() {
    console.log(this.user);
  }
}
