import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Array<Post> = [];

  constructor() { }

  ngOnInit() {
    this.posts[0] = new Post("Mon premier post", "Ceci est le contenu de mon premier post", 0, null);
    this.posts[1] = new Post("Mon deuxième post", "Ceci est le contenu de mon deuxième post", 0, null);
    this.posts[2] = new Post("Encore un post", "Ceci est le contenu d'un autre post", 0, null);
  }
}
