import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { SummaryViewRoutingModule } from './summary-view.routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SummaryViewComponent],
  imports: [
    CommonModule,
     SummaryViewRoutingModule,
     RouterModule
  ]
})
export class SummaryViewModule { }
