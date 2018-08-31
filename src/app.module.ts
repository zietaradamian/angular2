import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {QuoteService} from './quote.service';
import {ThirdComponent} from './third.component';
import {SecondComponent} from './second.component';
import {AppComponent} from './app.component';

@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [AppComponent, SecondComponent,ThirdComponent],
  providers: [
    { provide: QuoteService, useClass: QuoteService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}