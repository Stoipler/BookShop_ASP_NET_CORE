import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('src/app/modules/account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: 'author',
    loadChildren: () => import('src/app/modules/author/author.module').then(mod => mod.AuthorModule)
  },
  {
    path: 'printededition',
    loadChildren: () => import('src/app/modules/printed-edition/printed-edition.module').then(mod => mod.PrintedEditionModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('src/app/modules/admin/admin.module').then(mod => mod.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () => import('src/app/modules/user/user.module').then(mod => mod.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
