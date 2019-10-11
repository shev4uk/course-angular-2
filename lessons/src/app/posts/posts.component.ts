import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(
    private _postService: PostService
  ) { }

  ngOnInit() {
    this._postService.getPostsAll().subscribe( (data) => {
      this.posts = data;
      console.log(data);
    })
  }

}
