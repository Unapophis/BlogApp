import * as firebase from 'firebase';

export class Post {
    created_at: Object;

    constructor(
        public title: string,
        public content: string,
        public loveIts: number) {
            this.created_at = firebase.database.ServerValue.TIMESTAMP;
         }
  }