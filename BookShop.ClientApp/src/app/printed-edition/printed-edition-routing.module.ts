import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintedEditionsComponent } from './components/printed-editions/printed-editions.component';


const routes: Routes = [
  {
    path: 'printededition',
    component: PrintedEditionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintedEditionRoutingModule { }
