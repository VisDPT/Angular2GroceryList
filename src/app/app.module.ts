//Root of angular app

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateItemFormComponent } from './create-item-form/create-item-form.component';
import { ItemsToBuyComponent } from './items-to-buy/items-to-buy.component';
import { ItemsBoughtComponent } from './items-bought/items-bought.component';

import { ToBuyModule } from './services/to-buy.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateItemFormComponent,
    ItemsToBuyComponent,
    ItemsBoughtComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToBuyModule.forRoot()  //making ToBuy service globally available
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
