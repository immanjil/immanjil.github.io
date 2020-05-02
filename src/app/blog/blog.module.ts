import {NgModule} from '@angular/core';
import {MarkdownModule} from "ngx-markdown";
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {BlogComponent} from "./blog/blog.component";
import {PostComponent} from "./post/post.component";
import {SharedModule} from "../shared/shared.module";
import {BlogRoutingModule} from "./blog-routing.module";

@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
  ],
  imports: [
    BlogRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    SharedModule,

  ],
  exports: [
    BlogComponent,
    PostComponent,
  ]
})
export class BlogModule {
}
