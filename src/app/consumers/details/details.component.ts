import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: [
    './details.component.css',
    '../../../assets/css/tables.css',
  ]
})
export class DetailsComponent implements OnInit {
  title = "Details"

  constructor() { }

  ngOnInit(): void {
  }

}
