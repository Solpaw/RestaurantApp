import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit {

  constructor(private menu: MenuService, private auth: AuthService) { }

  posts;
  categories = [];
  loggedIn;

  ngOnInit(): void {
    this.menu.getMenu()
      .subscribe(res=>{
        this.posts = res.data;
        this.posts.forEach(ele=>{
          ele.category = ele.category.toLowerCase();
          ele.category = ele.category.charAt(0).toUpperCase() + ele.category.slice(1);
        })
        this.findCategories(this.posts);
        this.posts.sort((a,b)=>{
          if(a.category>b.category) return 1;
          else if (a.category<b.category) return -1;
          else return 0;
        });
        this.categories.sort((a,b)=>{
          if(a>b) return 1;
          else if (a<b) return -1;
          else return 0;
        })
      },err=>{
        console.log(err);
      });
    this.auth.loggedIn.subscribe(l=> this.loggedIn = l);
  }

  private findCategories(data) {
    this.categories.length = 0;
    this.categories = [...new Set(data.map(ele=>{
      return ele.category
    }))];
  }
}
