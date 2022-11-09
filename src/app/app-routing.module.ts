
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ConsumersComponent } from './consumers/consumers.component';
import { OverviewComponent } from './overview/overview.component';
import { PartnersComponent } from './partners/partners.component';
import { RidersComponent } from './riders/riders.component';
import { TicketsComponent } from './tickets/tickets.component';
import { LoginComponent } from './auth/login/login.component';
// Details Components
import { DetailsComponent as PartnerDetails} from './partners/details/details.component';
import { DetailsComponent as ConsumerDetails } from './consumers/details/details.component';
import { DetailsComponent as RiderDetails } from './riders/details/details.component';

const routes: Routes = [
  {
    path: 'auth/login', component: LoginComponent
  },
  {path: 'overview', component: OverviewComponent},
  {path: 'consumers', component: ConsumersComponent},
  {path: 'consumers/:id', component: ConsumerDetails},
  {path: 'partners', component: PartnersComponent},
  {path: 'partners/:id', component: PartnerDetails},
  {path: 'riders', component: RidersComponent},
  {path: 'riders/:id', component: RiderDetails},
  {path: 'support-tickets', component: TicketsComponent},
  {path: '',   redirectTo: '/overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
