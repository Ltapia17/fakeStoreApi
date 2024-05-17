import { Component } from '@angular/core';
import { StoreService } from 'src/app/store/services/store.service';
import { TabMenuModule } from 'primeng/tabmenu';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  public termSearch: string = '';

  constructor(

    private router: Router
  ) {}

  searchProduct(product: string) {
    if (!product || product === ''|| product.trim() === '') return;
    // this.storeServices.getproductsBySearch(product.trim());
    this.termSearch = '';
    this.router.navigateByUrl(`/search/${product.trim()}`)

  }
}
