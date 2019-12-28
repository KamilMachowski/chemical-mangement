import { Component, OnInit, Input } from '@angular/core';
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
  @Input() item: Item = new Item();
  editable = false;

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
      this.item = this.items[this.selected];
      localStorage.setItem('edit', JSON.stringify(this.item));
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
  edition() {
    // edition on/off method
    this.editable = !this.editable;
    if (this.editable) {
      document.getElementById('updateItem').removeAttribute('disabled');
      document.getElementById('cas').removeAttribute('disabled');
      document.getElementById('name').removeAttribute('disabled');
      document.getElementById('location').removeAttribute('disabled');
      document.getElementById('supplier').removeAttribute('disabled');
      document.getElementById('quantity').removeAttribute('disabled');
    } else {
      document.getElementById('updateItem').setAttribute('disabled', '');
      document.getElementById('cas').setAttribute('disabled', '');
      document.getElementById('name').setAttribute('disabled', '');
      document.getElementById('location').setAttribute('disabled', '');
      document.getElementById('supplier').setAttribute('disabled', '');
      document.getElementById('quantity').setAttribute('disabled', '');
    }
  }
  update() {
    console.log(this.item);

    const data = JSON.stringify(this.item);
    this.apiService.putData(data).subscribe(res => console.log(res));

    //             $("#success").append(data); // data = Item ${item.id} successfully updated
    //             $("#again").attr('id', 'searchItem').append("Search new item");
    //             console.log(data);
  }
}
