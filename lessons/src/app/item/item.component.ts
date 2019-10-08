import { Component, OnInit } from '@angular/core';
import { ConectService } from '../conect.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  view;

  constructor(
    private connect: ConectService
  ) { }

  ngOnInit() {
    this.connect.subject.subscribe( (data) => {
      console.log(data);
    });

    this.connect.view.subscribe( (view) => {
      this.view = view;
    })

    setTimeout( () => {
      this.connect.subject.next(1);
    }, 5000);
  }

}
