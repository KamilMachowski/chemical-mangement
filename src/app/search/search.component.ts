import { Component, OnInit, Input } from '@angular/core';
// declare var JSDraw: any;
// declare var chemwriter: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() search: string;

  constructor() {}

  ngOnInit() {
    localStorage.removeItem('search');
    // chemwriter();
    // JSDraw.create('test', {
    //   plugins: [{
    //     iconurl: 'plugins/world.gif',
    //     tooltips: 'Get SMILES',
    //     onclick: this.foo
    //   }]
    // });
  }

  searchItem() {
    localStorage.setItem('search', this.search);
  }
  foo(jsdraw: { getSmiles: () => string; }) {
    this.search = jsdraw.getSmiles();
    console.log(this.search);
    }
}
