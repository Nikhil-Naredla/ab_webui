import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { SummaryViewRoutingModule } from './summary-view.routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DatepickerComponent} from '../summary-view/datepicker/datepicker.component'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';






@NgModule({
  declarations: [SummaryViewComponent,DatepickerComponent],
  imports: [
    CommonModule,
     SummaryViewRoutingModule,
     RouterModule,
     FormsModule,
     ReactiveFormsModule,
     BsDatepickerModule.forRoot()
    ],
  bootstrap: [DatepickerComponent]

})
export class SummaryViewModule { }
