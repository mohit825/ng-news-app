import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  api :string = "http://newsapi.org/v2/sources?apiKey=5a970b00a9004cbdafd093583cb8c4f9";
  constructor(private _http: HttpClient) { }

  getSources(){
    return fetch(this.api);
  }
}
