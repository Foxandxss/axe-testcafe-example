import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DarkModeDropDownComponent } from './dark-mode-drop-down/dark-mode-drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeDropDownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
