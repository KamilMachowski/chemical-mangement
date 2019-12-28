import { Component, OnInit } from "@angular/core";
import { Item } from "../_models/item";
import { ApiService } from "../api.service";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  items: Item[];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const search = localStorage.getItem("search");
    this.apiService.getData(search).subscribe(data => {
      const numberOfHits = data.length; // it is ok - data type array is not recognised properly
      let selected = false; // let for checking if record is selected for table toggling purpose
      let ids = []; // array of ids of finded records, strored for set unique button id
      // console.log(data);
      console.log(`Number of hits: ${numberOfHits}, ${ids.length}`);
      if (!numberOfHits) {
        document.getElementById("response").innerHTML = `
          <button type="button" class="btn btn-danger center" disabled>Compound not found</button>
          <button id="addNewItem" class="btn btn-success">Add new item</button>
        `;
      } else {
        document.getElementById("response").innerHTML = `
          <div>
            <button class="btn btn-secondary disabled">Found ${numberOfHits} compounds</button>
            <select id="select">
              <option value=''>Choose one</option>
              ${loopForOptions(numberOfHits)}
            </select>
          </div>
        `;
        function loopForOptions(n: number) {
          let opt:string;
          for (let i = 0; i < n; i++) {
            opt += `<option value="${data[i].id}">${data[i].name}</option>`;
            ids.push(data[i].id);
          }
          return opt;
        } // filling <div id="select"> with buttons for finded records to view
      }
      // document.getElementsByName("select").change(function() {
      const vieved = document.getElementById("select").nodeValue; // get original ID in DB
      //   console.log(vieved);
      if (!selected) {
        //     document.getElementById('hit').show();
        //     selected = true;
      } else if (!vieved) {
        selected = false;
        localStorage.removeItem("edit");
        //     document.getElementById('hit").hide();
      }
      let currentId: number;
      for (let i = 0; i < ids.length; i++) {
        if (ids[i] === vieved) {
          currentId = i;
        }
      }
      if (isNaN(currentId)) {
        return;
      }
      // this on click i triggered on every button pressed, but is dediacted only for those with numerical id
      const result = data[currentId];
      localStorage.setItem("edit", JSON.stringify(result));

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
    }); // cleares previous structure in case of no SMILES in DB for choosen compound
  }
}
