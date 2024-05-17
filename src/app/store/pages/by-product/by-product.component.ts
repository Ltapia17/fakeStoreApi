import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, switchMap } from 'rxjs';
import { StoreService } from '../../services/store.service';
import { Fakestore } from '../../interfaces/fakeStore.interface';

@Component({
  selector: 'app-by-product',
  templateUrl: './by-product.component.html',
  styles: [],
})
export class ByProductComponent implements OnInit {

  public product?:Fakestore;

  constructor(
    private activateRouter: ActivatedRoute,
    private storeServices: StoreService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activateRouter.params
      .pipe(switchMap(({ id }) => this.storeServices.getProductById(id)))
      .subscribe((resp) => {


        if( !resp) return this.router.navigateByUrl('');
          return this.product = resp;
      });
  }
}
