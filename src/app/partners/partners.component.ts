import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor() { }
  title = "Partners"

  displayedColumns: string[] = ['name', 'owner', 'phone', 'email', 'country', 'city', 'symbol'];
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
  owner: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'God is King Foods', owner: 'Kwesi Brempong', phone: '054569797656', email: 'kofi1@gmail.com', country: 'Ghana', city: 'Accra', symbol: ''},
  {name: 'God is King Foods', owner: 'Kwesi Brempong', phone: '054569797656', email: 'kofi1@gmail.com', country: 'Ghana', city: 'Accra', symbol: ''},
  {name: 'God is King Foods', owner: 'Kwesi Brempong', phone: '054569797656', email: 'kofi1@gmail.com', country: 'Ghana', city: 'Accra', symbol: ''},
  {name: 'God is King Foods', owner: 'Kwesi Brempong', phone: '054569797656', email: 'kofi1@gmail.com', country: 'Ghana', city: 'Accra', symbol: ''},
  {name: 'God is King Foods', owner: 'Kwesi Brempong', phone: '054569797656', email: 'kofi1@gmail.com', country: 'Ghana', city: 'Accra', symbol: ''},
  {name: 'God is King Foods', owner: 'Kwesi Brempong', phone: '054569797656', email: 'kofi1@gmail.com', country: 'Ghana', city: 'Accra', symbol: ''},
  {name: 'God is King Foods', owner: 'Kwesi Brempong', phone: '054569797656', email: 'kofi1@gmail.com', country: 'Ghana', city: 'Accra', symbol: ''},
  {name: 'God is King Foods', owner: 'Kwesi Brempong', phone: '054569797656', email: 'kofi1@gmail.com', country: 'Ghana', city: 'Accra', symbol: ''},
  {name: 'God is King Foods', owner: 'Kwesi Brempong', phone: '054569797656', email: 'kofi1@gmail.com', country: 'Ghana', city: 'Accra', symbol: ''},
  {name: 'God is King Foods', owner: 'Kwesi Brempong', phone: '054569797656', email: 'kofi1@gmail.com', country: 'Ghana', city: 'Accra', symbol: ''},
];
