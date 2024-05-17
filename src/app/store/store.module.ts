import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset';
import { StoreRoutingModule } from './store.routing.module';
import { ByCategoriesComponent } from './pages/by-categories/by-categories.component';
import { BySearchComponent } from './pages/by-search/by-search.component';
import { SpinnerLoadingComponent } from '../shared/components/spinner-loading/spinner-loading.component';
import { SharedModule } from '../shared/shared.module';
import { ByProductComponent } from './pages/by-product/by-product.component';


@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ImageModule,
    ButtonModule,
    AccordionModule,
    FieldsetModule,
    StoreRoutingModule,
    SharedModule

  ],
  declarations: [
    MainPageComponent,
    CardListComponent,
    ByCategoriesComponent,
    BySearchComponent,
    ByProductComponent,

  ],
  providers: [],
})
export class StoreModule {}
