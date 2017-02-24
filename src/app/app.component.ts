import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //which html tag the component will load into
  templateUrl: './app.component.html',  //allows to split html into a separate file
  styleUrls: ['./app.component.css'] //stylesheets
})
export class AppComponent { //actual component
  title = 'Angular app works NOW!';
}
