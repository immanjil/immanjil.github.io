import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SharedRoutingModule} from "./shared-routing.module";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
