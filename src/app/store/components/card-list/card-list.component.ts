import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fakestore } from '../../interfaces/fakeStore.interface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'store-card-list',
  templateUrl: './card-list.component.html',
  styles: [
  ]
})
export class CardListComponent  {

  constructor(private StoreService:StoreService){}





  @Input()
  public products:Fakestore[] =[]

  public spinnerLoading:boolean= false;











}
