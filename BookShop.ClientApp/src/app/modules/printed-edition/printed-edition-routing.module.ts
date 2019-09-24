import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintedEditionsComponent } from './components/printed-editions/printed-editions.component';
import { PrintedEditionDetailsComponent } from './components/printed-edition-details/printed-edition-details.component';


const routes: Routes = [
  {
    path: 'printededition',component: PrintedEditionsComponent,
  },
  {path:'printededition/:printedEditionId', component:PrintedEditionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintedEditionRoutingModule { }
