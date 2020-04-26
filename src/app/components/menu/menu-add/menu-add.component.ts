import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {

  constructor(private menu: MenuService, private router: Router) { }

  form = new FormGroup({
    name: new FormControl('',[
      Validators.required
    ]),
    category: new FormControl('',[
      Validators.required
    ]),
    description: new FormControl('',[
      Validators.required
    ]),
    price: new FormControl('',[
      Validators.required,
      Validators.pattern(/^[+]?\d*\.?\d*$/)
    ])
  });

  add() {
    const data = {name: this.form.get('name').value, category: this.form.get('category').value, description: this.form.get('description').value, price: this.form.get('price').value};
    this.menu.addItem(data)
      .subscribe(res=>{
        if(res.status==201) this.router.navigate(['/dashboard/menu']);
      },err=>{
        this.form.setErrors({
          failedToPost: true
        })
        console.log(err);
      })
  }

  ngOnInit(): void {
  }

}
