import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //configUrl = 'assets/config.json';
  constructor(private http: HttpClient) {}
  public getData() {
    return this.http.get(`https://pht-api-munonj7kmq-ew.a.run.app/api/chemicals/get?search={this.search}`);
  }
  // postConfig() {
  //   return this.http.post(this.configUrl, postOptions); // todo
  // }
  // putConfig() {
  //   return this.http.put(this.configUrl, putOptions); //todo
  // }
  // deleteConfig() {
  //   return this.http.delete(this.configUrl , delOptions);
  // }
}
