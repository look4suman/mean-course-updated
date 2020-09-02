import { Component } from '@angular/core';
import { IPost } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: IPost[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
