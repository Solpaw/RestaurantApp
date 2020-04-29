import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.scss']
})
export class CancelReservationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private reservations: ReservationService) { }

  id;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
  }


  removeReservation() {
    this.reservations.deleteReservation(this.id)
      .subscribe(res=>{
        console.log(res);
      },err=>{
        console.log(err);
      })
    this.router.navigate(['/dashboard/menu']);
  }
}
