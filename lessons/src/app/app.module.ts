import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { ItemComponent } from './item/item.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ItemComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
