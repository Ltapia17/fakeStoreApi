import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenubarModule } from 'primeng/menubar'
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuBarComponent,
    SearchBoxComponent,
    SpinnerLoadingComponent,



  ],
  imports: [

    MenubarModule,
    InputTextModule,
    HttpClientModule,
    ButtonModule,
    TabMenuModule,
    ProgressSpinnerModule,
    FormsModule

  ],
  exports:[
    MenuBarComponent,
    SpinnerLoadingComponent
  ]
})
export class SharedModule { }
