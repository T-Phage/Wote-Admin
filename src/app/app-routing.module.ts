import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { AuthComponent } from './auth/auth.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { OverviewComponent } from './overview/overview.component';
import { PartnersComponent } from './partners/partners.component';
import { RidersComponent } from './riders/riders.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  // {path: 'auth', component: AuthComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'consumers', component: ConsumersComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'riders', component: RidersComponent},
  {path: 'support-tickets', component: TicketsComponent},
  {path: '',   redirectTo: '/overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }