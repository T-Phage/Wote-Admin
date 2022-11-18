import {Injectable, Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wote Admin';

  showProfileMenu = false;
  sideOpened: boolean = false
  public token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU0YmIyMTY1LTcxZTEtNDFhNi1hZjNlLTdkYTRhMGUxZTJjMSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJXb3RlIERlbGl2ZXIiLCJzdWIiOiJhMTBkNTU3NS1mNzRjLTRmYjgtOGUyMC01YjkxYTQwMTlkMjkiLCJleHAiOjE2NzEwOTgzMDcsImlhdCI6MTY2ODUwNjMwNywicm9sZXMiOlsiVVNFUiIsIkFETUlOIl19.BCK3lzcLadmb0SMkdpL5YRjY5rH1qnq3iL8kzXr7KwauNzYE0ZoQg24k7mlMWjOnmP6CqFNbKwvDEpalVzecxYFy_rDaNyirq2Pqz__qr0a9_7k-BKa3No2X11I9zGKrjFa7cPQnbdsp0M-ymHNJdzhuQnyv9Uc_3Ui18Ffl5lteLZZvdWMhi__N9HQXciu9Se2nBQvsCXC9Huc7Ic3Z8t30IkCqQHBq_7mjgPN_NyTb0bEPXxIpRy7WrHNmThwmYXcAmooj-a_dfrunku9rKzWEgYTxL9V0Xi_ZZOQHyeeeBfJt5fNQn_YFvBV9F4SSAwiMArySetB1xOol-Jb6Nw'

  showProfileMenuFunc(){
    this.showProfileMenu = !this.showProfileMenu
  }

  toggleSideMenu(){
    console.log(document.querySelector('.container'));

    var sidenav = document.querySelector('.sidenav') as HTMLDivElement
    var containerDiv = document.querySelector('.container') as HTMLDivElement
    var topNavBar = document.querySelector('.top-nav') as HTMLDivElement
    var toggleIcon = document.querySelector('.menu-toggle-icon') as HTMLDivElement

    var x = window.matchMedia("(max-width: 600px)")

    if(x.matches){
      if(sidenav.style.display == 'block'){
        sidenav.style.display = 'none';
        containerDiv.style.marginLeft = '0px';
        topNavBar.style.marginLeft = '0px';
        this.sideOpened = !this.sideOpened;
      } else {
        sidenav.style.display = 'block';
        containerDiv.style.marginLeft = '247px';
        topNavBar.style.marginLeft = '247px';
        this.sideOpened = !this.sideOpened;
      }
    }
  }

  constructor(public router: Router){
  }


}
