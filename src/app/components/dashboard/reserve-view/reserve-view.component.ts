import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';
import { forkJoin } from 'rxjs';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
  selector: 'app-reserve-view',
  templateUrl: './reserve-view.component.html',
  styleUrls: ['./reserve-view.component.scss']
})
export class ReserveViewComponent implements OnInit {

  constructor(private tables: TableService, private reservations: ReservationService) { }

  ngOnInit(): void {
    this.minDate = new Date();
    this.minTime = this.reservations.getOpeningTime();
    this.maxTime = this.reservations.getLastReservationTime();
  }
  tableList;
  date;
  minDate: Date;
  minTime;
  maxTime;
  confirmationError = false;
  confirmationSuccess = false;

  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
        bodyBackgroundColor: '#424242',
    },
    dial: {
        dialBackgroundColor: '#555',
    },
    clockFace: {
        clockFaceBackgroundColor: '#555',
        clockHandColor: '#eb7e53',
        clockFaceTimeInactiveColor: '#eb7e53',
        clockFaceInnerTimeInactiveColor: '#eb7e53'
    }
};

  form = new FormGroup({
    date: new FormControl('',Validators.required),
    hour: new FormControl('',Validators.required),
    table: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    surname: new FormControl('',Validators.required),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
  })

  dateStepCompleted() {
    return !this.form.get('date').errors;
  }

  hourStepCompleted() {
    return !this.form.get('hour').errors;
  }

  tableStepCompleted() {
    return !this.form.get('table').errors;
  }

  dataStepCompleted() {
    return !(this.form.get('name').errors || this.form.get('surname').errors || this.form.get('email').errors);
  }
  
  tabSelector($event) {
    if($event.selectedIndex == 1)  {
      this.checkTime(this.form.get('date').value);
    }
    else if($event.selectedIndex==2) {
      const inputDate: Date = this.formatDate();
      forkJoin([this.tables.getTables(),this.reservations.getReservationsUser()])
        .subscribe(res=>{
          const reserve = res[1].data;
          this.tableList = res[0].data.filter(table=>{
            let available = true;
            reserve.forEach(r=>{
              if(!inputDate) return;
              const rDate: Date = new Date(r.date);
              if(r.table==table._id && Math.abs(rDate.valueOf()-inputDate.valueOf()) <= this.reservations.getReservationTime()) {
                available = false;
                return;
              }
            })
            return available;
          })
          this.tableList.forEach(table=>{
            table.text = `${table.size}-osobowy, numer: ${table.number}`;
          })
        },err=>{
          console.log(err);
        })
    }
    else if($event.selectedIndex==4) {
      this.date = this.formatDate();
      if(!this.date) return;
      this.date = this.date.toLocaleString();
    }
  }

  confirm() {
    const time: Date = this.formatDate();
    if (!time) return;
    const data = {date: time, table: this.form.get('table').value._id, surname: this.form.get('surname').value, name: this.form.get('name').value, email: this.form.get('email').value};
    this.reservations.makeReservation(data)
      .subscribe(res=>{
        console.log(res);
        if(res.status == 201) {
          this.confirmationSuccess = true;
        } else {
          this.confirmationError = true;
        }
      },err=>{
        console.log(err);
        this.confirmationError = true;
      })
  }

  private checkTime(date: Date) {
    if(date.getFullYear() == this.minDate.getFullYear() && date.getMonth() == this.minDate.getMonth() && date.getDate() == this.minDate.getDate()) {
      const h = (this.minDate.getHours() + 3) % 24;
      this.minTime = `${h}:00`;
    } else this.minTime = this.reservations.getOpeningTime();
  }

  private formatDate() {
    const date = this.form.get('date').value;
    const time = this.form.get('hour').value;
    if(!date || !time) return null;
    const d: Date = new Date(date);
    d.setHours(time.slice(0,2),time.slice(3));
    return d;
  }
}
