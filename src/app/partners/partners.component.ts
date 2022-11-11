import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { PARTNERS_ELEMENT } from '../../assets/datatables/partners.datatables';

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

    var ele = ((e as HTMLElement).children[0]) as HTMLElement
    ele.style.visibility = 'visible';
    ele.classList.add('viewed')
  }

  constructor() { }
  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

}

