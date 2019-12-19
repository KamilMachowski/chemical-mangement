import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/config.json';
  constructor(private httpClient: HttpClient) {}
  getConfig() {
    return this.httpClient.get(this.configUrl);
  }
  postConfig() {
    return this.httpClient.post(this.configUrl, body); // todo
  }
  putConfig() {
    return this.httpClient.put(this.configUrl, body); //todo
  }
  deleteConfig() {
    return this.httpClient.delete(this.configUrl);
  }
}
