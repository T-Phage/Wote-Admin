import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.css']
})
export class RidersComponent implements OnInit {

  title = "Riders"
  constructor() { }

  displayedColumns: string[] = ['name', 'phone', 'email', 'location', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  phone: string;
  email: string;
  location: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Kofi Darlinton', phone: '054569797656', email: 'kofi1@gmail.com', location: 'Jonkobri', symbol: ''},
  {name: 'Kofi Darlinton', phone: '054569797656', email: 'kofi1@gmail.com', location: 'Jonkobri', symbol: ''},
  {name: 'Kofi Darlinton', phone: '054569797656', email: 'kofi1@gmail.com', location: 'Jonkobri', symbol: ''},
  {name: 'Kofi Darlinton', phone: '054569797656', email: 'kofi1@gmail.com', location: 'Jonkobri', symbol: ''},
  {name: 'Kofi Darlinton', phone: '054569797656', email: 'kofi1@gmail.com', location: 'Jonkobri', symbol: ''},
  {name: 'Kofi Darlinton', phone: '054569797656', email: 'kofi1@gmail.com', location: 'Jonkobri', symbol: ''},
  {name: 'Kofi Darlinton', phone: '054569797656', email: 'kofi1@gmail.com', location: 'Jonkobri', symbol: ''},
  {name: 'Kofi Darlinton', phone: '054569797656', email: 'kofi1@gmail.com', location: 'Jonkobri', symbol: ''},
  {name: 'Kofi Darlinton', phone: '054569797656', email: 'kofi1@gmail.com', location: 'Jonkobri', symbol: ''},
  {name: 'Kofi Darlinton', phone: '054569797656', email: 'kofi1@gmail.com', location: 'Jonkobri', symbol: ''},
];
