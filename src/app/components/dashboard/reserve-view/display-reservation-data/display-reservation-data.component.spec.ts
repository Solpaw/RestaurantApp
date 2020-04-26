import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReservationDataComponent } from './display-reservation-data.component';

describe('DisplayReservationDataComponent', () => {
  let component: DisplayReservationDataComponent;
  let fixture: ComponentFixture<DisplayReservationDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayReservationDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReservationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
