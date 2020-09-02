import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];
  // posts: IPost[] = [
  //   { title: 'First Post', content: 'This is First Post"s content' },
  //   { title: 'Second Post', content: 'This is Second Post"s content' },
  //   { title: 'Third Post', content: 'This is Third Post"s content' }
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}
