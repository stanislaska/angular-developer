'use strict';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppProductModule } from './products/app.module';

// Initialize the given root module configuration ...
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppProductModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
