import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
const routes = [
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map