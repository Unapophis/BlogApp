import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onDeleteBook(post: Post) {
    this.postsService.removePost(post);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
