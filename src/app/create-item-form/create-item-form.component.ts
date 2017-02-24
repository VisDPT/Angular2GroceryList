import { Component, OnInit } from '@angular/core'; //OnInit - Function below is run as soon as the code initializes
import { toBuyService } from '../services/to-buy.service';

@Component({
  selector: 'create-item-form',
  templateUrl: './create-item-form.component.html',
  styleUrls: ['./create-item-form.component.css']
})
export class CreateItemFormComponent implements OnInit {
  //constructor used to specify imported variables b4 component initializes; services=how angular shares data bw componenets; here is where the http Get goes?
  constructor(private toBuyService: toBuyService) { //as soon as component constructs, it's providing a new private variable called toBuyService;
}
public itemTitle: string;
postItem(){//posts to item array
var newItem = {
  'title': this.itemTitle,
//  'category': this.itemCategory,
  'taskNumber': this.toBuyService.items.length +1,
  'completed': false
}
this.toBuyService.items.push(newItem);
this.itemTitle = "";
console.log (this.toBuyService.items);
} 


  ngOnInit() {
  }

}
