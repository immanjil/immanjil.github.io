import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {
  ASSET_FOLDER: string = environment.assetsUrl;
  BLOG_FILE: string = this.ASSET_FOLDER  + '/blog/blog.md' ;

  constructor() { }

  ngOnInit() {
  }
}
