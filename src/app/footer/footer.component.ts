import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})

export class FooterComponent {
  public currentYear: number;

  constructor() {
    const d = new Date();
    this.currentYear= d.getFullYear();
  }
}
