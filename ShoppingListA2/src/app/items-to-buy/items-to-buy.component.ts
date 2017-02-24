import { Component, OnInit } from '@angular/core';
import { toBuyService } from '../services/to-buy.service';

@Component({

  selector: 'items-to-buy',
  templateUrl: './items-to-buy.component.html',
  styleUrls: ['./items-to-buy.component.css']
})
export class ItemsToBuyComponent implements OnInit {

  constructor(public toBuyService: toBuyService) { }
  public  itemsCompleted: number; //don't wanna show this component if its grocery is bought

  ngOnInit() {
    this.itemsCompleted=0;
  }

}
