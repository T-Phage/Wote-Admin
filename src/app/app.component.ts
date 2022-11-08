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

  constructor(public router: Router){
  }
  // router: Router = this.router;



}
