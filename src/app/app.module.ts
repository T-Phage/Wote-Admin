import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

// import * as CanvasJSAngularChart from '../assets/Charts/canvasjs.angular.component';
// import * as CanvasJSAngularChart from '../assets/Charts/stock/canvasjs.angular.component';
// var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { PartnersComponent } from './partners/partners.component';
import { RidersComponent } from './riders/riders.component';
import { TicketsComponent } from './tickets/tickets.component';
import { MatTableModule} from '@angular/material/table';
import { DetailsComponent as ParterDetails } from './partners/details/details.component';
import { DetailsComponent as ConsumerDetails } from './consumers/details/details.component';
import { DetailsComponent as RiderDetails } from './riders/details/details.component';
import { EditComponent as RiderEditComponent } from './riders/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ConsumersComponent,
    RidersComponent,
    TicketsComponent,
    ConsumerDetails,
    RiderDetails,
    RiderEditComponent,
    PartnersComponent,
    ParterDetails,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    // NO_ERRORS_SCHEMA,
  ],

})
export class AppModule { }
