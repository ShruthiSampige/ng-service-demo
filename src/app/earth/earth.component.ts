import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit() {}

  handler() {
    this.dataService.counter = 3;
  }
}
