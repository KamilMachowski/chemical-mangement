import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) {}
  getConfig() {
    return this.http.get<Config>(this.configUrl, getOptions);
  }
  postConfig() {
    return this.http.post(this.configUrl, postOptions); // todo
  }
  putConfig() {
    return this.http.put(this.configUrl, putOptions); //todo
  }
  deleteConfig() {
    return this.http.delete(this.configUrl , delOptions);
  }
}
