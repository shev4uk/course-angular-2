import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  modeView = 'd-flex';
  isActive = false;
  show = true;

  ngOnInit() {
    setTimeout(() => {
      this.modeView = 'd-flex flex-column';
    }, 1000);
  }

  toggleBlock() {
    this.show = !this.show;
  }

}
