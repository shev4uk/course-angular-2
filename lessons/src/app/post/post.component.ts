import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts;

  constructor(
    private post: PostService
  ) { }

  ngOnInit() {
    this.post.getAll().subscribe( (post) => {
      console.log(post);
      this.posts = post;
    });

    this.post.getAllTodo().subscribe( (data) => {
      console.log(data);
    })
  }

}
