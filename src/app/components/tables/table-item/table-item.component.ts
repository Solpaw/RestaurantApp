import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableService } from 'src/app/services/table.service';


@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {

  constructor(private tables: TableService) { }

  @Input() id;
  @Input() number;
  @Input() capacity;
  @Output() reload = new EventEmitter();

  remove() {
    this.tables.removeTable(this.id)
      .subscribe(res=>{
        this.reload.emit();
      },err=>{
        console.log(err);
      })
  }

  ngOnInit(): void {
  }
}
