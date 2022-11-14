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

  showProfileMenuFunc(){
    this.showProfileMenu = !this.showProfileMenu
  }

  toggleSideMenu(){
    var sidenav = document.querySelector('.sidenav') as HTMLDivElement
    console.log(sidenav);

    // sidenav.style.maxWidth = '100px';


    // sidenavLinkText.style.display = 'none';
  }

  constructor(public router: Router){
  }
  // router: Router = this.router;



}
