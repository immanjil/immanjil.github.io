import { TestBed } from '@angular/core/testing';

import { HttpConfigInterceptorService } from './http-config-interceptor.service';

describe('HttpConfigInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpConfigInterceptorService = TestBed.get(HttpConfigInterceptorService);
    expect(service).toBeTruthy();
  });
});
