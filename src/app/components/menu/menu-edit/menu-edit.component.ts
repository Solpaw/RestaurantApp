import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss']
})
export class MenuEditComponent implements OnInit {

  constructor(private menu: MenuService, private route: ActivatedRoute, private router: Router) { }

  id;

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

  edit() {
    const data = { name: this.form.get('name').value, category: this.form.get('category').value, description: this.form.get('description').value, price: this.form.get('price').value}
    console.log(data);
    this.menu.editItem(data,this.id)
      .subscribe(res=>{
        this.router.navigate(['/dashboard/menu']);
      }, err=>{
        this.form.setErrors({
          failedToPost: true
        });
        console.log(err);
      });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.menu.getItem(this.id)
      .subscribe(res=>{
        this.form.get('name').setValue(res.data[0].name);
        this.form.get('category').setValue(res.data[0].category);
        this.form.get('price').setValue(res.data[0].price);
        this.form.get('description').setValue(res.data[0].description);
      },err=>{
        console.log(err);
      })
  }
}
