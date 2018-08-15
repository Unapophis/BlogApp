import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/Post';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: string;

  constructor(private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  getStatePostClass() {
    return {
        'list-group-item': true,
        'list-group-item-success': this.loveIts > 0,
        'list-group-item-danger': this.loveIts <= 0
    };
  }

  loveIt() {
    this.postsService.loveIt(this.id);
  }

  dontLoveIt() {
    this.postsService.dontLoveIt(this.id);
  }

  deleteIt() {
    this.postsService.removePost(this.id);
  }
}
