import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email.model';

@Component({
  selector: 'app-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.scss']
})
export class InboxListComponent implements OnInit {

  constructor() { }

  emailList: Email[] = [{
    id: 1,
    title: 'Email 1',
    subject: 'Subject 1',
    text: 'Some text',
    author: 'Author' 
  }, {
    id: 2,
    title: 'Email 2',
    subject: 'Subject 2',
    text: 'Some text',
    author: 'Author 2' 
  }];

  ngOnInit() {
  }

  deleteFromList(id) {
    console.log(id);
  }
}
