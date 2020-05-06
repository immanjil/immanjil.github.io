import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private apiBaseUrl = 'http://sandbox.onlinephpfunctions.com/';

  constructor(
    private http: HttpClient,
  ) { }

  public runCode() {
    const code = "<?php\necho 'hello';";
    const phpVersion = '7_2_4';
    const output = 'Textbox';
    const ajaxResult = '1';

    const params = new HttpParams()
      .set('request', JSON.stringify(code))
      .set('request', JSON.stringify(phpVersion))
      .set('request', JSON.stringify(output))
      .set('request', JSON.stringify(ajaxResult));
    return this.http.post(this.apiBaseUrl, params, {withCredentials: true})
      .pipe(
        map(
          (response: any) => response.json()
        )
      );
  }
}
