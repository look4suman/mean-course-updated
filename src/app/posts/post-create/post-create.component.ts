import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  //@Output() postCreated = new EventEmitter<Post>();
  postCreateForm: FormGroup;


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postCreateForm = new FormGroup({
      enteredTitle: new FormControl(''),
      enteredContent: new FormControl(''),
    });
  }

  onAddPost(form: FormGroup) {
    if (!form.valid) {
      return;
    }

    const post: Post = {
      title: form.value.enteredTitle,
      content: form.value.enteredContent
    };

    this.postService.addPost(post);
    form.reset
  }

  get enteredTitle() { return this.postCreateForm.get('enteredTitle'); }
  get enteredContent() { return this.postCreateForm.get('enteredContent'); }

}
