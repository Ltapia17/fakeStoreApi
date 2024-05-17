import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, switchMap, tap } from 'rxjs';
import { Category, Fakestore } from '../../interfaces/fakeStore.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-by-categories',
  templateUrl: './by-categories.component.html',
  styles: [],
})
export class ByCategoriesComponent implements OnInit {

  public loading:boolean= false;
  public productsListCategories: Fakestore[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private storeServices: StoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        tap(()=>{
          this.loading = true;
        }),
        switchMap(({ categorie }) =>
          this.storeServices.getByCategories(categorie)
        )
      )
      .subscribe((resp) => {
        this.loading = false;
        if (resp.length === 0)  return this.router.navigateByUrl('');
        this.productsListCategories = resp;

        return;
      });
  }
}
