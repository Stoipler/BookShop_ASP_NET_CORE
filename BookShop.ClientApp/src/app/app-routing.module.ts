import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'account',
    loadChildren: () => import('src/app/modules/account/account.module').then(mod => mod.AccountModule),
    pathMatch: 'full'
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
  {
    path: 'cart',
    loadChildren: () => import('src/app/modules/cart/cart.module').then(mod => mod.CartModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
