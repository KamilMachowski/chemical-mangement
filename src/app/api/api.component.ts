import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-config',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
items;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((data) => (this.items = data));
  }
}
