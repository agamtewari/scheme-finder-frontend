import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchemeFinderComponent } from './components/scheme-finder/scheme-finder.component';
import { SchemeService } from './services/scheme.service';

@NgModule({
  declarations: [
    AppComponent,
    SchemeFinderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SchemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
