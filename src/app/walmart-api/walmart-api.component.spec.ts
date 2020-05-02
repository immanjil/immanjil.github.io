import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WalmartApiComponent} from './walmart-api.component';

describe('WalmartApiComponent', () => {
  let component: WalmartApiComponent;
  let fixture: ComponentFixture<WalmartApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WalmartApiComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalmartApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
