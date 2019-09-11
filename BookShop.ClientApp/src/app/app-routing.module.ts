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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
