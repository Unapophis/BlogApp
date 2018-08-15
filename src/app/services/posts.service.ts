import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post';
import * as firebase from 'firebase';

@Injectable()
export class PostsService {

    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() { }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts() {
        firebase.database().ref('/posts')
        .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
        })
    }

    getSinglePosts(id: number) {
        return new Promise(
        (resolve, reject) => {
            firebase.database().ref('/posts/' + id).once('value').then(
            (data) => {
                resolve(data.val());
            }, (error) => {
                reject(error);
            }
            );
        }
        );
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
    }

    removePost(id: number) {
        this.posts.splice(id, 1);
        this.savePosts();
        this.emitPosts();
    }

    loveIt(id: number) {
        this.getSinglePosts(+id).then(
            (post: Post) => {
              this.editPost(id, true, false);              
            }
        )
    }

    dontLoveIt(id: number) {
        this.getSinglePosts(+id).then(
            (post: Post) => {
              this.editPost(id, false, true);              
            }
        )
    }

    editPost(id: number, love: boolean, dontLove: boolean) {
        if (love) {
            this.posts[id].loveIts ++;
        }

        if (dontLove) {
            this.posts[id].loveIts --;
        }

        this.savePosts();
        this.emitPosts();
    }
}