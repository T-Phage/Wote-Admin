import { AuthModule } from './auth/auth.module';

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ConsumersComponent } from './consumers/consumers.component';
import { OverviewComponent } from './overview/overview.component';
import { PartnersComponent } from './partners/partners.component';
import { RidersComponent } from './riders/riders.component';
import { TicketsComponent } from './tickets/tickets.component';
// Details Components
import { DetailsComponent as PartnerDetails} from './partners/details/details.component';
import { DetailsComponent as ConsumerDetails } from './consumers/details/details.component';
import { DetailsComponent as RiderDetails } from './riders/details/details.component';
import { EditComponent as RidersEditComponent } from './riders/edit/edit.component';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },
  {path: 'overview', component: OverviewComponent},
  {path: 'consumers', component: ConsumersComponent},
  {path: 'consumers/:id', component: ConsumerDetails},
  {path: 'partners', component: PartnersComponent},
  {path: 'partners/:id', component: PartnerDetails},
  {path: 'partners/edit/:id', component: PartnerDetails},
  {path: 'riders', component: RidersComponent},
  {path: 'riders/:id', component: RiderDetails},
  {path: 'riders/edit/:id', component: RidersEditComponent},
  {path: 'support-tickets', component: TicketsComponent},
  {path: '',   redirectTo: '/overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
