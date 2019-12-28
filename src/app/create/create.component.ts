import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../_models/item';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Input() item: Item = new Item();
  constructor(private apiService: ApiService) {}

  ngOnInit() {}
  create(){
    const data = JSON.stringify(this.item);
    // console.log(data);
    this.apiService.postData(data).subscribe(res => console.log(res));
  }
}
