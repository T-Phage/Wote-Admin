import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { CONSUMERS_DATA } from '../../assets/datatables/consumers.datatables'

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  title = "Consumers";
  public showDeactivateModal:boolean = false;

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

    var ele = ((e as HTMLElement).children[0]) as HTMLElement
    ele.style.visibility = 'visible';
    ele.classList.add('viewed')
  }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

}
