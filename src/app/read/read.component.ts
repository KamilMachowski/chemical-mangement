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
  item: Item;
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
  update(){
    $(document).ready(function () {
      var editItem = localStorage.getItem('edit');
      editItem = JSON.parse(editItem);

      $("#tableBody").append(`
          <input id="cas" type=text class="form-control" value=${editItem.cas}>
          <input id="name" type=text class="form-control" value=${editItem.name}>
          <input id="location" type=text class="form-control" value=${editItem.location}>
          <input id="supplier" type=text class="form-control" value=${editItem.supplier}>
          <input id="quantity" type=text class="form-control" value=${editItem.quantity}>     
      `);

      $("#updateItem").click(function () {

          var updateItem = {
              id: editItem.id,
              smiles: editItem.smiles,
              cas: $("#cas").val(),
              name: $("#name").val(),
              quantity: $("#quantity").val(),
              supplier: $("#supplier").val(),
              location: $("#location").val()
          };
          var settings = {
              async: true,
              crossDomain: true,
              url: "https://pht-api-munonj7kmq-ew.a.run.app/api/chemicals/update",
              method: "PUT",
              data: JSON.stringify(updateItem)
          };
          console.log(updateItem);

          $.ajax(settings).done(function (data) {
              var ctrl6 = new SuccessCtrl();
              ctrl6.GetView();
              $("#success").append(data);
              $("#again").attr('id', 'searchItem').append("Search new item");
              console.log(data);
          });
      });

  });
  }
}
