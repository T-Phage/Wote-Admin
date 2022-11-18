import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';

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

  tableErrorMsg: string = "No data found...";

  CUSTOMERS_ELEMENT: CustomersElement[] = []
  displayedColumns: any;
  dataSource: any;
  public showDeactivateModal:boolean = false;
  public showMenuBg:boolean = false;

  customersList: any;

  token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU0YmIyMTY1LTcxZTEtNDFhNi1hZjNlLTdkYTRhMGUxZTJjMSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJXb3RlIERlbGl2ZXIiLCJzdWIiOiJhMTBkNTU3NS1mNzRjLTRmYjgtOGUyMC01YjkxYTQwMTlkMjkiLCJleHAiOjE2NzEyNzk2MTEsImlhdCI6MTY2ODY4NzYxMSwicm9sZXMiOlsiVVNFUiIsIkFETUlOIl19.XpGypQYMAsMZOK0zVCIFNE3jSg-ppBitS-Wm_eChe0q1tzF5QMu3ooZMxleXX2FydP9CwezW85FPUZo7cbHujveg4ublm9pw_MUW2bzIPsTZHEfuxrZ3G7yzCyP-lOf_3Tc-N_EU-gnef6yVyg2jKyI8ugI3WdpNKsueJe92gJOA6UIm9xr2oiq6DLHPnXxq8HfykMqpakMsHE3B0NpwapLFLr-E6zL8SFJ1rr11ccdR7xHhBzNt-j06gvyDG6TjIvw9dvX-F1m9Drb4ysXi8JdJKdz4I8EiG1Ae7Rhmlbfxrk3Rkrd3wyKOW3acfV5VKDvt7EGugIFA-kjxW6gD6g'
  baseUrl = 'https://staging-wote-deliver-8pv2.encr.app/admin';

  // load all customers
  async loadCustomersFunc () {
    try {
      const response = await fetch(this.baseUrl+'/customers', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/json',
          'accept': 'application.json',
          'Authorization': 'Bearer ' + this.token,
        },
      })
      const data = await response.json()
      console.log(data);

      this.customersList = await data.data
      this.CUSTOMERS_ELEMENT = await data.data

      // Table columns with data
      this.displayedColumns = ['name', 'email', 'phoneNumber', 'location', 'isActive', 'status', 'button']
      this.dataSource = new MatTableDataSource(this.CUSTOMERS_ELEMENT);
    } catch (e){
      // Table columns with data
      this.displayedColumns = ['name', 'email', 'phoneNumber', 'location', 'isActive', 'status', 'button']
      this.dataSource = new MatTableDataSource(this.CUSTOMERS_ELEMENT);
      this.tableErrorMsg = "An error may have occured check your internet connectivity and refresh page";
      console.log('error', e);
      console.log(this.CUSTOMERS_ELEMENT.length);
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public router: Router) { }

  openDeactivateDialog() {
    console.log('clicked');
    this.showDeactivateModal = !this.showDeactivateModal
  }

   // Close opened menu when any part of consumer component is clicked
  closeOnScreenClicked() {
    // var menuElementsLen = (document.getElementsByClassName('menu') as HTMLCollection).length
    var menuElements = document.querySelector('.viewed') as HTMLDivElement
    menuElements.classList.remove('viewed')
    menuElements.style.display = 'none';
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
      menuElementItem.style.display = 'none';
      menuElementItem.classList.remove('viewed')
    }

    this.showMenuBg = !this.showMenuBg

    var ele = ((e as HTMLElement).children[0]) as HTMLElement
    ele.style.display = 'flex';
    ele.classList.add('viewed')
  }

  hideMenu(){
    this.showMenuBg = !this.showMenuBg;
    var menu = document.querySelector('.viewed') as HTMLDivElement
    menu.classList.remove('viewed');
    menu.style.visibility = 'hidden';
  }

  async ngOnInit(): Promise<any> {
    const data = await this.loadCustomersFunc();
    data
    setTimeout(() => this.dataSource.paginator = this.paginator);
    console.log(this.tableErrorMsg);
  }

}

interface CustomersElement {
  docID: string;
  email: string;
  firstname: string;
  lastname: string;
  isActive: boolean;
  location: string;
  phoneNumber: string;
  status: boolean;
}
