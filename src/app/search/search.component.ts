import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;

  constructor() {}

  ngOnInit() {}
  searchItem() {
    this.apiService.getData().subscribe((data) => (this.items = data));
  }
}
