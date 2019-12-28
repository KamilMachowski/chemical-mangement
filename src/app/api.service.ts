import { Injectable, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import { Item } from './_models/item';
// import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //items: Object[];
  //@Input() search: string;
 // showData$: Observable<any>;
 // private search = new Subject<any>();
  // configUrl = 'assets/config.json';
 // const items = new Item[];
  constructor(private http: HttpClient) {
   // this.showData$ = this.search.asObservable();
  }
  getData(search: string) {
    return this.http.get(`https://pht-api-munonj7kmq-ew.a.run.app/api/chemicals/get?search=${search}`); // ok
  }

  // postConfig() {
  //   return this.http.post(this.configUrl, postOptions); // todo
  // }
  putData(data: string) {
     return this.http.put(`https://pht-api-munonj7kmq-ew.a.run.app/api/chemicals/update`, data);
  }
  // deleteConfig() {
  //   return this.http.delete(this.configUrl , delOptions);
  // }
}
