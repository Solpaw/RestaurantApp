import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  constructor(private menu: MenuService, private auth: AuthService) { }

  loggedIn;

  @Input() index;
  @Input() id: String;
  @Input() name: String;
  @Input() description: String;
  @Input() price: String;
  @Input() category: String;

  @Output() reload = new EventEmitter();

  ngOnInit(): void {
    this.auth.loggedIn.subscribe(l=> this.loggedIn = l);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.name) {
      let string: String = changes.name.currentValue;
      string = string.charAt(0).toUpperCase() + string.slice(1);
      this.name = string;
    }

    if(changes.price) {
      this.price = changes.price.currentValue.toFixed(2);
    }
  }

  remove() {
    this.menu.removeItem(this.id)
      .subscribe(res=>{
        this.reload.emit();
      },err=>{
        console.log(err);
      })
  }
}
