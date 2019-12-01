import { Component, OnInit,Input } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote:Quote
   

  downvote(){
    this.quote.dislikes=this.quote.dislikes+1
  }
  
  upvote(){
    this.quote.likes=this.quote.likes+1
  }

  constructor() { }

  ngOnInit() {
  }

}
