import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

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
  public showApproveModal:boolean = false;
  public showDeactivateModal:boolean = false;
  public showMenuBg:boolean = false;

  token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU0YmIyMTY1LTcxZTEtNDFhNi1hZjNlLTdkYTRhMGUxZTJjMSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJXb3RlIERlbGl2ZXIiLCJzdWIiOiJhMTBkNTU3NS1mNzRjLTRmYjgtOGUyMC01YjkxYTQwMTlkMjkiLCJleHAiOjE2NzEwOTgzMDcsImlhdCI6MTY2ODUwNjMwNywicm9sZXMiOlsiVVNFUiIsIkFETUlOIl19.BCK3lzcLadmb0SMkdpL5YRjY5rH1qnq3iL8kzXr7KwauNzYE0ZoQg24k7mlMWjOnmP6CqFNbKwvDEpalVzecxYFy_rDaNyirq2Pqz__qr0a9_7k-BKa3No2X11I9zGKrjFa7cPQnbdsp0M-ymHNJdzhuQnyv9Uc_3Ui18Ffl5lteLZZvdWMhi__N9HQXciu9Se2nBQvsCXC9Huc7Ic3Z8t30IkCqQHBq_7mjgPN_NyTb0bEPXxIpRy7WrHNmThwmYXcAmooj-a_dfrunku9rKzWEgYTxL9V0Xi_ZZOQHyeeeBfJt5fNQn_YFvBV9F4SSAwiMArySetB1xOol-Jb6Nw'
  baseUrl = 'https://staging-wote-deliver-8pv2.encr.app/admin';


  createParnerFunc () {
    var xhr = new XMLHttpRequest();
    xhr.setRequestHeader('Authorization', this.token)
    xhr.open('POST', this.baseUrl + '/partner')
    // xhr.onload = function(){
    //   if (xhr.status != 200) {
    //     console.log("Error")
    //     return
    //   }
    // }
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         // Typical action to be performed when the document is ready:
         console.log(xhr.responseText);
      }
    };
    xhr.onerror = function(){
      console.log('request failed');
    }
    xhr.send();
  }

  displayedColumns: string[] = ['name', 'owner', 'phone', 'email', 'country', 'city', 'symbol'];
  dataSource = new MatTableDataSource(PARTNERS_ELEMENT);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleApproveModal() {
    this.showApproveModal = !this.showApproveModal;
  }
  toggleDeactivateModal(){
    this.showDeactivateModal = !this.showDeactivateModal;
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

    setTimeout(() => {
      // console.log("Delayed for 3 second.");
      this.toggleApproveModal()
    }, 3000)
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

    this.showMenuBg = !this.showMenuBg;

    var ele = ((e as HTMLElement).children[0]) as HTMLElement
    ele.style.visibility = 'visible';
    ele.classList.add('viewed')
    console.log('item');
    console.log(menuElements);
  }

  hideMenu(){
    this.showMenuBg = !this.showMenuBg;
    var menu = document.querySelector('.viewed') as HTMLDivElement
    menu.classList.remove('viewed');
    menu.style.visibility = 'hidden';
  }

  constructor() { }
  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    console.log(this.token);
    // this.createParnerFunc();

  }

}

interface PeriodicElement {
  name: string;
  owner: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  symbol: string;
}

const PARTNERS_ELEMENT: PeriodicElement[] = [
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
