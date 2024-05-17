import { Component, OnInit } from '@angular/core';
import { Fakestore } from '../../interfaces/fakeStore.interface';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-by-search',
  templateUrl: './by-search.component.html',
  styles: [],
})
export class BySearchComponent implements OnInit {

  public loading:boolean= false;

  public capitalizarPrimeraLetraDeCadaPalabra(frase: string) {
    const fraseLower = frase.toLocaleLowerCase();
    const palabras = fraseLower.split(' ');
    const palabrasCapitalizadas = palabras.map((palabra) => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
    return palabrasCapitalizadas.join(' ');
  }

  constructor(
    private storeServices: StoreService,
    private activeRoute: ActivatedRoute
  ) {}

  public productBySearch: Fakestore[] = [];
  public search: string = '';

  ngOnInit(): void {


    this.activeRoute.params
      .pipe(
        tap(()=>{
          this.loading = true;
        }),

        switchMap(({ term }) => this.storeServices.getproductsBySearch(term))
      )
      .subscribe((resp) => {
        this.loading = false;
        if(this.productBySearch.length > 0) this.productBySearch = [];
        this.search = this.storeServices.term;
          if(!this.search)return;


        for (const element of resp) {
          if (element.title.includes(this.capitalizarPrimeraLetraDeCadaPalabra(this.search))){
            this.productBySearch.push(element);

          }
        }


      });
  }
}


