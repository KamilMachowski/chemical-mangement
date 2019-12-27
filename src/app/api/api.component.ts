import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Config } from 'protractor';
import { Item } from '../_models/item';

@Component({
  selector: 'app-config',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  items: Item[];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    
  }
}
