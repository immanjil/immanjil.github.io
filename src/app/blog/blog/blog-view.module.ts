import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BlogComponent} from './blog.component';
import {MarkdownModule} from "ngx-markdown";

import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BlogComponent}
    ]),
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    FormsModule,
    AppModule
  ]
})
export class BlogViewModule {
}
