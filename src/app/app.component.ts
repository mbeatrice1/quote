import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes ='new quotes';

  
    quote:string[];
  
    constructor(){
      this.quote = ['Watch finding Nemo', 'Buy cookies', 'Get new phone case']
    } 
  }
  

