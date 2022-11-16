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

  chartOptions = {
	  animationEnabled: true,
	  title: {
      text: " "
	  },
	  axisX: {
      labelAngle: 0,
      interval: 0,
    },
    axisY: {
      title: "",
      scaleBreaks: {
        spacing: 4,
      }
	  },
	  axisY2: {
      title: ""
	  },
	  toolTip: {
      shared: true,
	  },
	  legend:{
		cursor:"pointer",
		itemclick: function(e: any){
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  }
		  else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{
		type: "column",
		name: "Orders",
    color: "#FF000D",
		legendText: "New Orders",
		showInLegend: true,
		dataPoints:[
		  {label: "Mon", y: 262},
		  {label: "Tue", y: 211},
		  {label: "Wed", y: 175},
		  {label: "Thur", y: 137},
		  {label: "Fri", y: 115},
		  {label: "Sat", y: 104},
		  {label: "Sun", y: 97.8},
		]
	  },
    // white spacing
    {
      type: "column",
      name: "White Space",
      color: '#FFFFFF',
      dataPoints:[
        {label: "Mon", y: 0},
      ]
    }, {
		type: "column",
		name: "Declined orders(Restaurant)",
    color: '#FC555E',
		legendText: "Declined orders(Retaurant)",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints:[
		  {label: "Mon", y: 11.15},
		  {label: "Tue", y: 2.5},
		  {label: "Wed", y: 3.6},
		  {label: "Thur", y: 4.2},
		  {label: "Fri", y: 2.6},
		  {label: "Sat", y: 2.7},
		  {label: "Sun", y: 3.1},
		]
	  },
    // white space
    {
      type: "column",
      name: "White Space",
      color: '#FFFF0',
      axisYType: "secondary",
      dataPoints:[
        {label: "Mon", y: 20},
      ]
    },
    {
      type: "column",
      name: "Declined orders(Riders)",
      color: "#FFEEEF",
      legendText: "Declined Orders(Riders)",
      axisYType: "secondary",
      showInLegend: true,
      dataPoints:[
        {label: "Mon", y: 11.15},
        {label: "Tue", y: 2.5},
        {label: "Wed", y: 3.6},
        {label: "Thur", y: 4.2},
        {label: "Fri", y: 2.6},
        {label: "Sat", y: 2.7},
        {label: "Sun", y: 3.1},
      ]
      },
      // white space
      {
        type: "column",
        name: "White Space",
        color: '#FFFFFF',
        axisYType: "secondary",
        dataPoints:[
          {label: "Mon", y: 0},
        ]
      },
      {
        type: "column",
        name: "Total orders",
        color: "#FFBDC1",
        legendText: "Total orders",
        axisYType: "secondary",
        showInLegend: true,
        dataPoints:[
          {label: "Mon", y: 11.15},
          {label: "Tue", y: 2.5},
          {label: "Wed", y: 3.6},
          {label: "Thur", y: 4.2},
          {label: "Fri", y: 2.6},
          {label: "Sat", y: 2.7},
          {label: "Sun", y: 3.1},
        ]
      },
      // white space
      {
        type: "column",
        name: "White Space",
        color: '#FFFFFF',
        axisYType: "secondary",
        dataPoints:[
          {label: "Mon", y: 0},
        ]
      },
    ]
	}

  // constructor(private paginator: MatPaginator) { }

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
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],

      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
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
