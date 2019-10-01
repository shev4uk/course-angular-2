import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringPipe } from './string.pipe';
import { OrderPipe } from './order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StringPipe,
    OrderPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
