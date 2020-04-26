import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar/navbar-item/navbar-item.component';
import { ReserveViewComponent } from './components/dashboard/reserve-view/reserve-view.component';
import { MenuViewComponent } from './components/dashboard/menu-view/menu-view.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ContactViewComponent } from './components/dashboard/contact-view/contact-view.component';

import {HttpClientModule} from '@angular/common/http';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { MenuAddComponent } from './components/menu/menu-add/menu-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuEditComponent } from './components/menu/menu-edit/menu-edit.component';
import { TableViewComponent } from './components/tables/table-view/table-view.component';
import { TableItemComponent } from './components/tables/table-item/table-item.component';
import { AddTableComponent } from './components/tables/add-table/add-table.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { DisplayReservationDataComponent } from './components/dashboard/reserve-view/display-reservation-data/display-reservation-data.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CancelReservationComponent } from './components/dashboard/reserve-view/cancel-reservation/cancel-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    NavbarItemComponent,
    ReserveViewComponent,
    MenuViewComponent,
    LoginComponent,
    ContactViewComponent,
    MenuItemComponent,
    MenuAddComponent,
    MenuEditComponent,
    TableViewComponent,
    TableItemComponent,
    AddTableComponent,
    DisplayReservationDataComponent,
    CancelReservationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatStepperModule,
    MatSelectModule
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
    {provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
