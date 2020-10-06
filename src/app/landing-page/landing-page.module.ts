import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { MachineViewComponent } from '../machine-view/machine-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: 
  [LandingPageComponent],
  imports: [
    SharedModule,
    LandingPageRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule,
  ]
})
export class LandingPageModule { }
