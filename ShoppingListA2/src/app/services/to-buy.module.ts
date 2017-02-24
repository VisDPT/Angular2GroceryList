import {NgModule} from '@angular/core';
import {toBuyService} from './to-buy.service';
@NgModule({})

export class ToBuyModule {
  static forRoot(){
    return {
      ngModule: ToBuyModule,
      providers: [toBuyService]
    }
  }
}