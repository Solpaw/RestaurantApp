import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-reservation-data',
  templateUrl: './display-reservation-data.component.html',
  styleUrls: ['./display-reservation-data.component.scss']
})
export class DisplayReservationDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() name;
  @Input() surname;
  @Input() email;
  @Input() table;
  @Input() date;
}
