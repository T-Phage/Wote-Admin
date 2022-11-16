import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { RIDERS_DATA } from '../../assets/datatables/riders.datatable';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: [
    './riders.component.css',
    '../../assets/css/tables.css',
  ]
})
export class RidersComponent implements OnInit {

  title = "Riders"
  public showDeactivateModal = false;
  public showMenuBg:boolean = false;

  constructor() { }

  displayedColumns: string[] = ['name', 'phone', 'email', 'location', 'symbol'];
  dataSource = new MatTableDataSource(RIDERS_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleDeactivateModal() {
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

