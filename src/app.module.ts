import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {QuoteService} from './quote.service';
import {ThirdComponent} from './third.component';
import {SecondComponent} from './second.component';
import {AppComponent} from './app.component';
import {CurrencySelectComponent} from './currenct-select.component';
import {MyPipe} from './my.pipes';

@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [AppComponent, SecondComponent,ThirdComponent, CurrencySelectComponent,MyPipe],
  providers: [
    { provide: QuoteService, useClass: QuoteService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}