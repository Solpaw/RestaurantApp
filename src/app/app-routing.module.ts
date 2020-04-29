import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReserveViewComponent } from './components/dashboard/reserve-view/reserve-view.component';
import { MenuViewComponent } from './components/dashboard/menu-view/menu-view.component';
import { LoginComponent } from './components/login/login.component';
import { ContactViewComponent } from './components/dashboard/contact-view/contact-view.component';
import { MenuAddComponent } from './components/menu/menu-add/menu-add.component';
import { MenuEditComponent } from './components/menu/menu-edit/menu-edit.component';
import { TableViewComponent } from './components/tables/table-view/table-view.component';
import { AddTableComponent } from './components/tables/add-table/add-table.component';
import { CancelReservationComponent } from './components/dashboard/reserve-view/cancel-reservation/cancel-reservation.component';
import { ReservationListComponent } from './components/dashboard/reserve-view/reservation-list/reservation-list.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'reserve', component: ReserveViewComponent},
    {path: 'menu', component: MenuViewComponent},
    {path: 'contact', component: ContactViewComponent},
    {path: 'tables', component: TableViewComponent},
    {path: 'reservations', component: ReservationListComponent}
  ]},
  {path: 'login',component: LoginComponent},
  {path: 'newMenuItem', component: MenuAddComponent},
  {path: 'newTable', component: AddTableComponent},
  {path: 'edit/:id', component: MenuEditComponent},
  {path: 'cancel/:id', component: CancelReservationComponent},
  {path: '', redirectTo: '/dashboard/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
