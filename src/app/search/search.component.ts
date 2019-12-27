import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;

  constructor() {}

  ngOnInit() {
    localStorage.removeItem('edit');
    localStorage.removeItem('search');
  }

  searchItem() {
    localStorage.setItem('search', this.search);
  }
}
