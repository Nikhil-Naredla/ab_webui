import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LandingPageModule } from './landing-page/landing-page.module';
import { HttpClientModule } from "@angular/common/http";
import { SummaryViewModule } from './summary-view/summary-view.module';
import { MachineViewModule } from './machine-view/machine-view.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    HttpClientModule,
    FormsModule ,
    SummaryViewModule,
    MachineViewModule ,
  SharedModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
