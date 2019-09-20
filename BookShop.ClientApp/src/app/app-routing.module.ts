import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: 'account',
  pathMatch: 'full',
  loadChildren: () => import('./modules/account/account.module').then(mod => mod.AccountModule)
},
{
  path: 'author',
  pathMatch: 'full',
  loadChildren: () => import('./modules/author/author.module').then(mod => mod.AuthorModule)
},
{
  path: 'printededition',
  pathMatch: 'full',
  loadChildren: () => import('./modules/printed-edition/printed-edition.module').then(mod => mod.PrintedEditionModule)
},
{
  path: 'admin',
  pathMatch: 'full',
  loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule) 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
