import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: [
    './consumers.component.css',
    '../../static/css/tables.css',
  ]
})

export class ConsumersComponent implements OnInit {

  title = "Consumers";
  public showDeactivateModal:boolean = false;
  public showMenuBg:boolean = false;

  displayedColumns: string[] = ['name', 'phone', 'email', 'location', 'symbol'];
  dataSource = new MatTableDataSource(CONSUMERS_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  openDeactivateDialog() {
    console.log('clicked');
    this.showDeactivateModal = !this.showDeactivateModal
  }

   // Close opened menu when any part of consumer component is clicked
  closeOnScreenClicked() {
    // var menuElementsLen = (document.getElementsByClassName('menu') as HTMLCollection).length
    var menuElements = document.querySelector('.viewed') as HTMLDivElement
    menuElements.classList.remove('viewed')
    menuElements.style.visibility = 'hidden';
    console.log(menuElements);
  }

  toggleModal() {
    this.showDeactivateModal = !this.showDeactivateModal;
  }

  //Menu Display
  zoomIn(e: any) {
    var menuElementsLen = (document.getElementsByClassName('menu') as HTMLCollection).length
    var menuElements = document.getElementsByClassName('menu') as HTMLCollection

    for(var i=0;i<menuElementsLen;i++){
      var menuElementItem = menuElements[i] as HTMLElement
      menuElementItem.style.visibility = 'hidden'
      menuElementItem.classList.remove('viewed')
    }

    this.showMenuBg = !this.showMenuBg

    var ele = ((e as HTMLElement).children[0]) as HTMLElement
    ele.style.visibility = 'visible';
    ele.classList.add('viewed')
  }

  hideMenu(){
    this.showMenuBg = !this.showMenuBg;
    var menu = document.querySelector('.viewed') as HTMLDivElement
    menu.classList.remove('viewed');
    menu.style.visibility = 'hidden';
  }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

}
interface PeriodicElement {
  name: string;
  phone: string;
  email: string;
  location: string;
  symbol: string;
}

const CONSUMERS_DATA: PeriodicElement[] = [
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Kofi Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Emma Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Emma Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Emma Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Emma Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Emma Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Emma Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Emma Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
  {phone: '00000000', name: 'Emma Darlington', email: 'mail@mail.com', location: 'jonkobri ST', symbol:''},
];
