import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post;

  constructor(
    private _postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // this._postService.getPostSingle(id).subscribe( (data) => {
    //   this.post = data;
    //   console.log(data);
    // });
    this.route.params.subscribe( params => {
      // console.log(params);
      let id = params.id;
      this._postService.getPostSingle(id).subscribe( (data) => {
        this.post = data;
        // console.log(data);
      });
    });

  }

  goToHome() {
      this.router.navigate(['/home']);
  }

  goBack() {
    this.location.back();
  }

}
