import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-walmart-api',
  templateUrl: './walmart-api.component.html',
  styleUrls: ['./walmart-api.component.scss']
})
export class WalmartApiComponent implements OnInit {
  public checkoutForm: FormGroup;
  public showResults: boolean = false;

  constructor() { }

  ngOnInit() {
    this.checkoutForm = new FormGroup({
      zipCode: new FormControl(''),
      sku: new FormControl(''),
    });
  }
  onSubmit() {
    // Process checkout data here
    console.log('Your request has been submitted');
    this.showResults = true;
  }

  clear() {
    console.log('Cleared Results');
    this.showResults = false;
  }
}
