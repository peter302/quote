import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'


@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  quotes:Quote [] =[new Quote("peter kuria","HP has some of the best features",new Date(),"Laptops","moses"),new Quote("joseph njoroge","Nairobi is the best city in the world with the coolest water",new Date(),"our city","wembley"),new Quote("johnson john","Isuzu Dmax is far much better than Ford",new Date(),"cars","Jonte"),new Quote("rispa nancy","the ice is decreasing on the mount",new Date(),"the ice","kambo")]

  quotePlus(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  quoteDeleted(clear,index){
    if(clear){
      this.quotes.splice(index,1)
    }
  }


  

  constructor() { }

  ngOnInit() {
  }

}
