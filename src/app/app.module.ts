import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { EntryComponent } from './entry/entry.component';
import { AddEntryComponent } from './entry/add-entry/add-entry.component';
import { ListEntryComponent } from './entry/add-entry/list-entry/list-entry.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AddEntryComponent,
    ListEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
