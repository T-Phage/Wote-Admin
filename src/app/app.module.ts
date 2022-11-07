import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthComponent } from './auth/auth.component';
import { OverviewComponent } from './overview/overview.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { PartnersComponent } from './partners/partners.component';
import { RidersComponent } from './riders/riders.component';
import { TicketsComponent } from './tickets/tickets.component';
import { MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    // AuthComponent,
    OverviewComponent,
    ConsumersComponent,
    PartnersComponent,
    RidersComponent,
    TicketsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AppModule { }
