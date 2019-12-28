import { Component, OnInit } from '@angular/core';
import { Item } from '../_models/item';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  selected: number;
  numberOfHits: number;
  items: Array<Item> = new Array();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const search = localStorage.getItem('search');
    this.apiService.getData(search).subscribe(data => {
      this.numberOfHits = data.length;
      // console.log(this.numberOfHits);
      for (let i = 0; i < this.numberOfHits; i++) {
        const tmp = new Item();
        tmp.id = data[i].id;
        tmp.cas = data[i].cas;
        tmp.name = data[i].name;
        tmp.location = data[i].location;
        tmp.quantity = data[i].quantity;
        tmp.smiles = data[i].smiles;
        tmp.supplier = data[i].supplier;
        this.items.push(tmp);
      }
      // console.log(this.items);

      // console.log(`Number of hits: ${this.numberOfHits}`);
    }); // cleares previous structure in case of no SMILES in DB for choosen compound
  }
  getItemProps() {
    console.log(this.selected);
    if (this.selected < 0) {
      localStorage.removeItem('edit');
    } else {
      const result = this.items[this.selected];
      localStorage.setItem('edit', JSON.stringify(result));
    }
    // const smiles = result.smiles;
      // const options = {
      //   width: 400,
      //   height: 300
      // };
      // const smilesDrawer = new SmilesDrawer.Drawer(options);

      // function draw() {
      //   SmilesDrawer.parse(
      //     smiles,
      //     function(tree) {
      //       smilesDrawer.draw(tree, 'output-canvas', 'light', false);
      //     },
      //     function(err) {
      //       console.log(err);
      //     }
      //   );
      // }
      // if (smiles) { draw(); } else {
      //   const c = document.getElementById('output-canvas');
      //   const ctx = c.getContext('2d');
      //   ctx.clearRect(0, 0, 400, 300);
  }
}
