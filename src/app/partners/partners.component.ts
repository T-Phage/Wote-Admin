import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: [
    './partners.component.css',
    '../../assets/css/tables.css',
  ]
})
export class PartnersComponent implements OnInit {

  title = "Partners"
  public showModal:boolean = false;

  displayedColumns: string[] = ['name', 'owner', 'phone', 'email', 'country', 'city', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  toggleBtnNext() {
    var mdlApprovePartnerContent = document.querySelector('div[id="mdl-approve-partner-content"]') as HTMLDivElement;
    mdlApprovePartnerContent.style.display = 'none';

    var mdlPartneInput = document.querySelector('.mdl-partner-input') as HTMLDivElement;
    mdlPartneInput.style.display = 'flex';
  }

  toggleBtnApprove() {
    var mdlPartneInput = document.querySelector('.mdl-partner-input') as HTMLDivElement;
    mdlPartneInput.style.display = 'none';

    var mdlPatnerConfirmed = document.querySelector('.mdl-patner-confirmed') as HTMLDivElement;
    mdlPatnerConfirmed.style.display = 'flex';
  }

  openDeactivateDialog() {
    console.log('clicked');
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

    var ele = ((e as HTMLElement).children[0]) as HTMLElement
    ele.style.visibility = 'visible';
    ele.classList.add('viewed')
  }

  constructor() { }
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
