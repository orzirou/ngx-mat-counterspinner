import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { NgxMatCounterspinnerModule } from '../../../ngx-mat-counterspinner/src/lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxMatCounterspinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
