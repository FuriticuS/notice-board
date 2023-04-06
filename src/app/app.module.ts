import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignComponent } from './components/sign/sign.component';
import { SearchComponent } from './components/search/search.component';
import { AdsListComponent } from './components/ads/ads-list/ads-list.component';
import { AdCardComponent } from './components/ads/ad-card/ad-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignComponent,
    SearchComponent,
    AdsListComponent,
    AdCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
