import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {ProjectComponent} from './project/project.component';
import {ContactComponent} from './contact/contact.component';
import {WalmartApiComponent} from './walmart-api/walmart-api.component';
import {SharedModule} from "./shared/shared.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
  {path: 'wally-api', component: WalmartApiComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'main', component: MainComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    WalmartApiComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
