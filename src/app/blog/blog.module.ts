import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'post', component: PostComponent },
];

@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //ComponentsModule,
  ]
})
export class BlogModule { }
