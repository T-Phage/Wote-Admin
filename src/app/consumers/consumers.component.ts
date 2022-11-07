import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  title = "Consumers"

  displayedColumns: string[] = ['name', 'phone', 'email', 'location'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  phone: string;
  email: string;
  location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST'},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST'},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST'},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST'},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST'},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST'},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST'},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST'},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST'},
];
