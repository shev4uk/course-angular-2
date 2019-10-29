import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-event-template',
  templateUrl: './event-template.component.html',
  styleUrls: ['./event-template.component.scss']
})
export class EventTemplateComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
