import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaksService {
  // tslint:disable-next-line: no-inferrable-types
  private URL: string = 'http://localhost:3800/api';
  constructor(private http: HttpClient) { }
  getTasks() {
    return this.http.get<any>(this.URL + '/taks');
  }
  getPrivateTasks() {
    return this.http.get<any>(this.URL + '/private-taks');
  }

}
