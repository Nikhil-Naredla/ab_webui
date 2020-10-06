import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MachineViewComponent } from './machine-view/machine-view.component';
import { MachineViewRoutingModule } from './machine-view.routing.module';



@NgModule({
  declarations: [MachineViewComponent],
  imports: [
    CommonModule,
     MachineViewRoutingModule,
     RouterModule
  ]
})
export class MachineViewModule { }

