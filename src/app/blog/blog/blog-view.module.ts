import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import {MarkdownModule} from "ngx-markdown";

import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BlogComponent}
    ]),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    FormsModule
  ]
})
export class BlogViewModule { }
