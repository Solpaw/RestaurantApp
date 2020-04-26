import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableService } from 'src/app/services/table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {

  constructor(private tables: TableService, private router: Router) { }

  form = new FormGroup({
    number: new FormControl('',[
      Validators.required,
      Validators.pattern(/^\d+$/)
    ]),
    capacity: new FormControl('',[
      Validators.required,
      Validators.pattern(/^\d+$/)
    ])
  })

  add() {
    const data = {number: this.form.get('number').value, size: this.form.get('capacity').value};
    this.tables.addTable(data)
      .subscribe(res=>{
        if(res.status==201) this.router.navigate(['/dashboard/tables']);
        else {
          this.form.setErrors({
            error: true
          })
        }
      },err=>{
        this.form.setErrors({
          error: true
        })
        console.log(err);
      })
  }

  ngOnInit(): void {
  }

}
