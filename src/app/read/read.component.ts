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
  numberOfHits: number; // used in html file!
  items: Item[] = [];
  @Input() item: Item = new Item();
  editable = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const search = localStorage.getItem('search');
    this.apiService.getData(search).subscribe((data: Item[]) =>{
      this.numberOfHits = data.length;
      this.items = data;
    });
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
  editOn() {
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
    //console.log(this.item);
    const data = JSON.stringify(this.item);
    this.apiService.putData(data).subscribe(res => console.log(res));
    // API response: Item ${item.id} successfully updated
  }
  delete() {
    console.log(`Item ID: ${this.item.id} will be deleted from DB`);
    if (confirm(`Item ID: ${this.item.id} will be deleted from DB`)) {
      this.apiService.deleteData(this.item.id).subscribe(res => console.log(res));
    }
    // API response: Item ${itemId} successfully deleted
  }
}
