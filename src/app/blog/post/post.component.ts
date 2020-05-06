import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {DomSanitizer, Meta, SafeUrl} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

import {isPlatformServer} from '@angular/common';

import {Subscription} from 'rxjs';

import {MarkdownService} from 'ngx-markdown';

// Utils
import {Comparator} from '../../../providers/core/utils/utils';
import {Resources} from '../../../providers/core/utils/resources';

// Web
import {FormControl, Validators} from "@angular/forms";
import {BlogPostService} from "../../_services/blog-post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnDestroy {
  private RESOURCES: any = Resources.Constants;

  private sub: Subscription;

  private postId: string;

  post: string;
  notFound = false;

  public code = new FormControl('', [Validators.required]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private markdownService: MarkdownService,
              private meta: Meta,
              private blogPostService: BlogPostService
              ) {

  }

  runCode() {
    this.blogPostService
      .runCode().subscribe(
      data => [console.log(data)],
      error => [console.log(error)],
      () => [console.log('completed!')]
    );
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(async (params) => {
      this.postId = params['id'];
      this.post =  './assets/blog/post/' + this.postId + '.md';

      if (isPlatformServer(this.platformId)) {
        await this.updateMetadata();
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onError($event) {
    this.notFound = true;
  }

  sanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  private updateMetadata(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      if (!Comparator.isStringEmpty(this.post) && !Comparator.isStringEmpty(this.postId)) {
        const content: string = await this.markdownService.getSource(this.post).toPromise();

        const titles: string[] = content.match(/(?:#\s)(.*)/g);
        const images: string[] = content.match(/(?:\/assets\/blog\/img\/post)(.*)(?:jpg|gif)/g);

        this.meta.updateTag({property: 'og:type', content: 'article'});
        this.meta.updateTag({property: 'og:url', content: this.RESOURCES.SOCIAL_SHARING.FLUSTER_WEBSITE + '/blog/post/' + this.postId});

        if (Comparator.hasElements(images)) {
          this.meta.updateTag({
            property: 'og:image',
            content: this.RESOURCES.SOCIAL_SHARING.FLUSTER_WEBSITE + images[0]
          });

          this.meta.updateTag({
            property: 'og:image:secure_url',
            content: this.RESOURCES.SOCIAL_SHARING.FLUSTER_WEBSITE + images[0]
          });
        }

        if (Comparator.hasElements(titles)) {
          let desc: string = titles[0].split(/\s(.*)/)[1];

          if (!Comparator.isStringEmpty(desc)) {

            if (titles.length > 1) {
              const extra: string = titles[1].split(/\s(.*)/)[1];

              if (!Comparator.isStringEmpty(extra)) {
                desc = desc + ' | ' + extra;
              }

              this.meta.updateTag({name: 'description', content: desc});
              this.meta.updateTag({property: 'og:description', content: desc});
            }
          }
        }
      }

      resolve();
    });
  }

}

