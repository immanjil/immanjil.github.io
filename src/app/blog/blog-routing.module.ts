import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BlogComponent} from "./blog/blog.component";
import {PostComponent} from "./post/post.component";


const routes: Routes = [
  {
    path: '', component: BlogComponent, data: {
      title: 'Blog',
      description: 'Blogs from Manjil.'
    }
  },
  {
  path: 'post/:id', component: PostComponent, data: {
      title: 'Blog Post',
      description: 'Blog Posts from Manjil.'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
