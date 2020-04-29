import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { forkJoin } from 'rxjs';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {

  constructor(private reservations: ReservationService, private tables: TableService) { }

  data;
  tableMap = new Map();

  ngOnInit(): void {
    forkJoin([this.reservations.getReservationsAdmin(),this.tables.getTables()])
      .subscribe(res=>{

        if(res[1].status==200) {
          res[1].data.forEach(ele=>{
            this.tableMap.set(ele._id,ele.number);
          })
        }
        if(res[0].status==200) {
          res[0].data.forEach(ele=>{
            ele.date = new Date(ele.date).toLocaleString();
            ele.table = this.tableMap.get(ele.table);
          })
          this.data = res[0].data;
        }
      },err=>{
        console.log(err);
      })
  }

}
