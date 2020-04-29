import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-reservation-data',
  templateUrl: './display-reservation-data.component.html',
  styleUrls: ['./display-reservation-data.component.scss']
})
export class DisplayReservationDataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  @Input() name;
  @Input() surname;
  @Input() email;
  @Input() table;
  @Input() date;
  @Input() id;
  @Input() removeTab = false;

  remove() {
    this.router.navigate([`/cancel/${this.id}`]);
  }
}
