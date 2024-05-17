import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BySearchComponent } from './pages/by-search/by-search.component';
import { ByCategoriesComponent } from './pages/by-categories/by-categories.component';
import { ByProductComponent } from './pages/by-product/by-product.component';

const routes: Routes = [
  {
    path: 'products',
    component: MainPageComponent,
  },
  {
    path: 'products/:categorie',
    component: ByCategoriesComponent,
  },
  {
    path: 'search/:term',
    component: BySearchComponent,
  },
  {
    path: 'products/by/:id',
    component: ByProductComponent,
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
