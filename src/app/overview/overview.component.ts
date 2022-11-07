import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements AfterViewInit {

  displayedColumns: string[] = ['orderId', 'productID', 'restaurantName', 'customerName', 'location', 'orderStatus', 'deliveredTime', 'deliveryPrice', 'foodAmount'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  title = "Overview"
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // constructor(private paginator: MatPaginator) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  // ngOnInit(): void {
  // }
}



export interface PeriodicElement {
  orderId: number;
  // position: number;
  productID: string;
  restaurantName: string;
  customerName: string;
  location: string;
  orderStatus: string;
  deliveredTime: string;
  deliveryPrice: string;
  foodAmount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {orderId: 1, productID: '#234', restaurantName: 'H', customerName: 'n', location: 'fdg', orderStatus: 'Delivered', deliveredTime: 'ert', deliveryPrice:'jkl', foodAmount: 'gdf' },
  {orderId: 2, productID: '#234', restaurantName: 'He', customerName: 'fhsj', location: 'fdg', orderStatus: 'Delivered,', deliveredTime: 'ert', deliveryPrice:'klm,', foodAmount: 'gdf' },
  {orderId: 3, productID: '#123', restaurantName: 'Li', customerName: 'fhsj', location: 'fdg', orderStatus: 'Delivered', deliveredTime: 'ert', deliveryPrice:'jkl', foodAmount: 'gdf' },
  {orderId: 4, productID: '9.0122', restaurantName: 'Be', customerName: 'fhsj', location: 'fdg', orderStatus: 'Delivered', deliveredTime: 'ert', deliveryPrice:'jk', foodAmount: 'gdf'},
  {orderId: 5, productID: '10.811,', restaurantName: 'B', customerName: 'fhsj', location: 'fdg', orderStatus: 'Delivered', deliveredTime: 'ert', deliveryPrice:'nkm', foodAmount: 'gdf'},
  // {position:6, orderId: 6, productID: '12.0107', restaurantName: 'C', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:7, orderId: 7, productID: '14.0067', restaurantName: 'N', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:8, orderId: 8, productID: '15.9994', restaurantName: 'O', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:9, orderId: 9, productID: '18.9984', restaurantName: 'F', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:10, orderId: 10, productID: '20.1797', restaurantName: 'Ne', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:11, orderId: 11, productID: '22.9897', restaurantName: 'Na', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:12, orderId: 12, productID: '24.305', restaurantName: 'Mg', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:13, orderId: 13, productID: '26.9815', restaurantName: 'Al', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:14, orderId: 14, productID: '28.0855', restaurantName: 'Si', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:15, orderId: 15, productID: '30.9738', restaurantName: 'P', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:16, orderId: 16, productID: '32.065', restaurantName: 'S', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:17, orderId: 17, productID: '35.453', restaurantName: 'Cl', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:18, orderId: 18, productID: '39.948', restaurantName: 'Ar', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:19, orderId: 19, productID: '39.0983', restaurantName: 'K', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
  // {position:20, orderId: 20, productID: '40.078', restaurantName: 'Ca', customerName: 'fhsj', location: 'fdg', orderStatus: '', deliveredTime: 'ert', deliveryPrice:'', foodAmount: 'gdf'},
];
