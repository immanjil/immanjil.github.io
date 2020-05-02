import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MarkdownModule} from "ngx-markdown";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BlogComponent} from "./blog/blog.component";
import {PostComponent} from "./post/post.component";

@NgModule({
  declarations: [BlogComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: BlogComponent},
      {path: 'post/:id', component: PostComponent},
    ]),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    FormsModule
  ]
})
export class BlogModule { }
