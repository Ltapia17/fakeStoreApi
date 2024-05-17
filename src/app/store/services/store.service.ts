import { Injectable } from '@angular/core';
import { Category } from '../interfaces/store.type';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fakestore } from '../interfaces/fakeStore.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private apiStore = 'https://fakestoreapi.com/products';
  public productsListCategories: Fakestore[] = [];
  public productsSearch: Fakestore[] = [];
  public term: string = '';
  public categorias: Category[] = [
    'Electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  constructor(private http: HttpClient) {}

  // getCategories():Observable<Category>{
  //   return this.http.get<Category>(`${this.apiStore}/categories`).
  //     pipe(
  //       catchError( () => of())
  //     )

  // }

  getByCategories(category: string): Observable<Fakestore[]> {
    return this.http
      .get<Fakestore[]>(`${this.apiStore}/category/${category.toLowerCase()}`)
      .pipe(catchError(() => of([])));
  }

  getProducts(): Observable<Fakestore[]> {
    return this.http
      .get<Fakestore[]>(this.apiStore)
      .pipe(catchError(() => of([])));
  }

  getproductsBySearch(term: string): Observable<Fakestore[]> {
    this.term = term;

    return this.http
      .get<Fakestore[]>(this.apiStore)
      .pipe(catchError(() => of([])));
  }

  getProductById(id: string):Observable<Fakestore | null> {
   return this.http.get<Fakestore>(`${this.apiStore}/${id}`)
   .pipe(
    map((store) => (store ? store : null)),
      catchError(() => of(null))
    )
  }
}
