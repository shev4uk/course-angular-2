import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InboxListComponent } from './inbox/inbox-list/inbox-list.component';
import { InboxItemComponent } from './inbox/inbox-list/inbox-item/inbox-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxListComponent,
    InboxItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
