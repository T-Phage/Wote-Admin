import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MdbDropdownDirective } from 'mdb-angular-ui-kit/dropdown';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wote Admin';
}
