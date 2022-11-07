import { style } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MdbDropdownDirective } from 'mdb-angular-ui-kit/dropdown';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  title = "Consumers"

  @ViewChild('dropdown') dropdown!: MdbDropdownDirective;

  displayedColumns: string[] = ['name', 'phone', 'email', 'location', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  zoomIn(e: any) {
    console.log(document.getElementsByClassName('menu') as HTMLCollection);
    var menuElementsLen = (document.getElementsByClassName('menu') as HTMLCollection).length
    var menuElements = document.getElementsByClassName('menu') as HTMLCollection

    for(var i=0;i<menuElementsLen;i++){
      var menuElementItem = menuElements[i] as HTMLElement
      menuElementItem.style.visibility = 'hidden'
    }

    var ele = ((e as HTMLElement).children[0]) as HTMLElement
    ele.style.visibility = 'visible';
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
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
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
];
