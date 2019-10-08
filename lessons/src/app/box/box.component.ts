import { Component, OnInit } from '@angular/core';
import { ConectService } from '../conect.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  constructor(
    private connect: ConectService
  ) { }

  ngOnInit() {
    this.connect.subject.subscribe( (data) => {
      console.log(data);
    });
  }

}
