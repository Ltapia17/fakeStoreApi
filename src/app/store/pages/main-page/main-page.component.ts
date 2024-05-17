import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Fakestore } from '../../interfaces/fakeStore.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'store-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent implements OnInit {

  constructor(private storeServices:StoreService) {}
  ngOnInit(): void {
    this.getProducts();
  }


  public products: Fakestore[] = [];
  public loading:boolean= false;


  getProducts(){
    this.loading = true;
    this.storeServices.getProducts()
      .subscribe(resp =>{
        this.products = resp;
        this.loading = false;
      })
  }

  get productsCategories():Fakestore[]{
    return this.storeServices.productsListCategories;
  }

  get productsSearch():Fakestore[]{
    return this.storeServices.productsSearch;
  }
}
