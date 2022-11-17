import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: [
    './partners.component.css',
    '../../static/css/tables.css',
  ]
})

export class PartnersComponent implements OnInit {

  title = "Partners"

  PARTNERS_ELEMENT: PartnersElements[] = [
    // {DocID: '', Location: ' ', EstablishmentName:'', NumberOfEstablishment: 0, FirstName: 'God', LastName: 'Kwesi Brempong', PhoneNumber: '054569797656', Email: 'kofi1@gmail.com', Ratings: 0, City: 'Accra', TypeOfEstablishment: 'Shop'},
    // {DocID: '', Location: ' ', EstablishmentName:'', NumberOfEstablishment: 0, FirstName: 'God', LastName: 'Kwesi Brempong', PhoneNumber: '054569797656', Email: 'kofi1@gmail.com', Ratings: 1, City: 'Accra', TypeOfEstablishment: 'Shop'},
  ]
  displayedColumns: any;
  dataSource: any;
  public showApproveModal:boolean = false;
  public showDeactivateModal:boolean = false;
  public showMenuBg:boolean = false;
  public dataIsLoading:boolean = true;

  partnersList:any;

  // token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU0YmIyMTY1LTcxZTEtNDFhNi1hZjNlLTdkYTRhMGUxZTJjMSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJXb3RlIERlbGl2ZXIiLCJzdWIiOiJhMTBkNTU3NS1mNzRjLTRmYjgtOGUyMC01YjkxYTQwMTlkMjkiLCJleHAiOjE2NzEwOTgzMDcsImlhdCI6MTY2ODUwNjMwNywicm9sZXMiOlsiVVNFUiIsIkFETUlOIl19.BCK3lzcLadmb0SMkdpL5YRjY5rH1qnq3iL8kzXr7KwauNzYE0ZoQg24k7mlMWjOnmP6CqFNbKwvDEpalVzecxYFy_rDaNyirq2Pqz__qr0a9_7k-BKa3No2X11I9zGKrjFa7cPQnbdsp0M-ymHNJdzhuQnyv9Uc_3Ui18Ffl5lteLZZvdWMhi__N9HQXciu9Se2nBQvsCXC9Huc7Ic3Z8t30IkCqQHBq_7mjgPN_NyTb0bEPXxIpRy7WrHNmThwmYXcAmooj-a_dfrunku9rKzWEgYTxL9V0Xi_ZZOQHyeeeBfJt5fNQn_YFvBV9F4SSAwiMArySetB1xOol-Jb6Nw'
  token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU0YmIyMTY1LTcxZTEtNDFhNi1hZjNlLTdkYTRhMGUxZTJjMSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJXb3RlIERlbGl2ZXIiLCJzdWIiOiJhMTBkNTU3NS1mNzRjLTRmYjgtOGUyMC01YjkxYTQwMTlkMjkiLCJleHAiOjE2NzEyNzk2MTEsImlhdCI6MTY2ODY4NzYxMSwicm9sZXMiOlsiVVNFUiIsIkFETUlOIl19.XpGypQYMAsMZOK0zVCIFNE3jSg-ppBitS-Wm_eChe0q1tzF5QMu3ooZMxleXX2FydP9CwezW85FPUZo7cbHujveg4ublm9pw_MUW2bzIPsTZHEfuxrZ3G7yzCyP-lOf_3Tc-N_EU-gnef6yVyg2jKyI8ugI3WdpNKsueJe92gJOA6UIm9xr2oiq6DLHPnXxq8HfykMqpakMsHE3B0NpwapLFLr-E6zL8SFJ1rr11ccdR7xHhBzNt-j06gvyDG6TjIvw9dvX-F1m9Drb4ysXi8JdJKdz4I8EiG1Ae7Rhmlbfxrk3Rkrd3wyKOW3acfV5VKDvt7EGugIFA-kjxW6gD6g'
  baseUrl = 'https://staging-wote-deliver-8pv2.encr.app/admin';

  async loadParnerFunc () {
    const response = await fetch(this.baseUrl+'/tenants', {
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

    // this.partnersList = await data.data
    this.PARTNERS_ELEMENT = await data.data
    this.dataIsLoading = await this.dataIsLoading

    // Table columns with table Data
    this.displayedColumns = ['EstablishmentName', 'owner', 'Email', 'PhoneNumber', 'TypeOfEstablishment', 'NumberOfEstablishment', 'Ratings', 'City',  'Location', 'button'];
    this.dataSource = new MatTableDataSource(this.PARTNERS_ELEMENT);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
      // menuElementItem.style.visibility = 'hidden'
      menuElementItem.style.display = 'none';
      menuElementItem.classList.remove('viewed')
    }

    this.showMenuBg = !this.showMenuBg;

    var ele = ((e as HTMLElement).children[0]) as HTMLElement
    // ele.style.visibility = 'visible';
    ele.style.display = 'flex'
    ele.classList.add('viewed')
    console.log('item');
    console.log(menuElements);
  }

  hideMenu(){
    this.showMenuBg = !this.showMenuBg;
    var menu = document.querySelector('.viewed') as HTMLDivElement
    menu.classList.remove('viewed');
    menu.style.display = 'none';
  }

  constructor() { }

  async ngOnInit(): Promise<any> {
    const data = await this.loadParnerFunc();
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }
}

interface PartnersElements {
  City: string;
  DocID: string;
  Email: string;
  EstablishmentName: string;
  FirstName: string;
  LastName: string;
  Location: any;
  NumberOfEstablishment: number;
  PhoneNumber: string;
  Ratings: number;
  TypeOfEstablishment: string;
}
