import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Observable, last } from 'rxjs';
import { Fakestore } from 'src/app/store/interfaces/fakeStore.interface';
import { Category } from 'src/app/store/interfaces/store.type';
import { StoreService } from 'src/app/store/services/store.service';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles:[``]
})
export class MenuBarComponent implements OnInit {

  constructor(private storeServices:StoreService) {}

  public productsByCategories:Fakestore[] = [];
  public items: MenuItem[] = [];



  ngOnInit() {



    this.items = [
      {
        label: 'Electronics',
        command: () => this.orderByCategory("Electronics"),
        routerLink: 'products/Electronics'


      },
      {
        label: 'jewelery',
        command: () => this.orderByCategory("jewelery"),
        routerLink: 'products/jewelery'

      },
      {
        label: "men's clothing",
        command: () => this.orderByCategory("men's clothing"),
        routerLink: "products/men's clothing"
      },

      {
        label: "women's clothing",
        command: () => this.orderByCategory("women's clothing"),
        routerLink: "products/women's clothing"

      },
    ];



  }



  orderByCategory(category:string):void{

    this.storeServices.getByCategories(category);

  }


}
