import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TimeAgoPipe} from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { TimesinceComponent } from './timesince/timesince.component';
import { DateCountPipe } from './date-count.pipe';
import { ApphighlightDirective } from './apphighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDisplayComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
    TimeAgoPipe,
    TimesinceComponent,
    DateCountPipe,
    ApphighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
