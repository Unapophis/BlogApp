import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: 'new', component: NewPostComponent},
  //{ path: 'posts/view/:id', component: PostListItemComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: '**', redirectTo: 'posts'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
