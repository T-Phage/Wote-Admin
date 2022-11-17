import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {

  displayedColumns: string[] = ['orderId', 'productID', 'restaurantName', 'customerName', 'location', 'orderStatus', 'deliveredTime', 'deliveryPrice', 'foodAmount'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  title = "Overview"
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  // constructor(private paginator: MatPaginator) { }

  dailyChartDataFunc(){

  }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);

  var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        datasets: [
          {
            type: 'bar',
            label: 'Total Orders',
            data: [10, 20, 30, 40, 50, 50, 50],
            backgroundColor: ["#ffbdc1"],
            borderRadius: 8,
          },
          {
            type: 'bar',
            label: 'New Orders',
            data: [50, 50, 50, 50, 50, 50, 100],
            backgroundColor: ["#ff000d"],
            borderRadius: 8,
          },
          {
            type: 'bar',
            label: 'Declined Orders(Restaurant)',
            data: [50, 50, 50, 50, 50, 50, 50],
            backgroundColor: ["#fc555e"],
            borderRadius: 8,
          },
          {
            type: 'bar',
            label: 'Declined orders(Riders)',
            data: [50, 50, 50, 50, 50, 50, 50],
            backgroundColor: ["#FFEEEF"],
            borderRadius: 8,
          },
        ],
        labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      },
      options: {
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                font: {
                  family: 'Mulish'
                }
              }
            },
          },
        },
      });
  }
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
];
