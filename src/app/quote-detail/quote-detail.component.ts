import { Component, OnInit,Output } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Output() quote:Quote

  constructor() { }

  ngOnInit() {
  }

}
