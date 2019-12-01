import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  quotes:Quote [] =[new Quote("kuria","peter",new Date())]

  

  constructor() { }

  ngOnInit() {
  }

}
