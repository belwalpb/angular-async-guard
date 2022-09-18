import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateDataComponent } from './private-data/private-data.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicDataComponent } from './public-data/public-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivateDataComponent,
    PublicDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
