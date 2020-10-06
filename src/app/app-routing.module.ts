import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MachineViewComponent } from './machine-view/machine-view.component';
import { MachineViewModule } from './machine-view/machine-view.module';
import { SummaryViewModule } from './summary-view/summary-view.module';



const routes: Routes = [
  // { path: 'machineView', component: MachineViewComponent},
  // {
  //   path: 'machine-view',
  //   loadChildren: './machine-view/machine-view.module/#MachineViewModule'
  // },
  // {
  //   path: 'summary-view',
  //   loadChildren: './summary-view/summary-view.module/#SummaryViewModule'
  // },
  {
    path: 'machine-view',
    loadChildren: () => import('./machine-view/machine-view.module').then(m => m.MachineViewModule)
  },
  {
    path: 'summary-view',
    loadChildren: () => import('./summary-view/summary-view.module').then(m => m.SummaryViewModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
