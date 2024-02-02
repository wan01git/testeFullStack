import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Layout2Component } from './layout2/layout2.component';

@NgModule({
  declarations: [AppComponent, Layout2Component],
  imports: [BrowserModule, MatIconModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
