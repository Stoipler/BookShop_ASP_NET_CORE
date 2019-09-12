import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: 'account',
  pathMatch: 'full',
  loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
},
{
  path: 'author',
  pathMatch: 'full',
  loadChildren: () => import('./author/author.module').then(mod => mod.AuthorModule)
},
{
  path: 'printededition',
  pathMatch: 'full',
  loadChildren: () => import('./printed-edition/printed-edition.module').then(mod => mod.PrintedEditionModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
