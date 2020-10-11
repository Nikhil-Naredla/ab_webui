import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageModule } from './landing-page/landing-page.module';
import { HttpClientModule } from "@angular/common/http";
import { SummaryViewModule } from './summary-view/summary-view.module';
import { MachineViewModule } from './machine-view/machine-view.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


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
    ReactiveFormsModule,
    SummaryViewModule,
    MachineViewModule ,
  SharedModule,
  BrowserAnimationsModule,
  // BsDatepickerModule.forRoot() 
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
