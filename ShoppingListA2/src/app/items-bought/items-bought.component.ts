import { Component, OnInit, Input } from '@angular/core';
import { toBuyService } from '../services/to-buy.service';

@Component({
  selector: 'items-bought',
  templateUrl: './items-bought.component.html',
  styleUrls: ['./items-bought.component.css']
})
export class ItemsBoughtComponent implements OnInit {

  constructor(public toBuyService: toBuyService) { }

  ngOnInit() {
  }
  @Input()
  showItemsBought:number;
  
}
