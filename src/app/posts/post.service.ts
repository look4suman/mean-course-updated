import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    this.httpClient.get<{ message: string, posts: any }>('http://localhost:3000/api/post')
      .pipe(map(postData => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            title: post.title,
            content: post.content
          };
        });
      }))
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts as Post[];
        this.postsUpdated.next([...this.posts]);
      });
  }

  addPost(post: Post) {
    console.log(post);
    this.httpClient.post<{ message: string }>('http://localhost:3000/api/post', post)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  deletePost(id: string) {
    console.log(id);
    this.httpClient.delete('http://localhost:3000/api/post/' + id)
      .subscribe(() => {
        console.log('deleted!!!');
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
