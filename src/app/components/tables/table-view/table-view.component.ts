import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor(private tables: TableService) { }

  tableList;

  ngOnInit(): void {
    this.tables.getTables()
      .subscribe(res=>{
        this.tableList = res.data;
      },err=>{
        console.log(err);
      })
    
  }

}
