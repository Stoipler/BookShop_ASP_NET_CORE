import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/helpers/authentication.guard';
import { OrdersComponent } from 'src/app/modules/user/components/orders/orders.component';
import { ProfileComponent } from 'src/app/modules/user/components/profile/profile.component';
const routes = [
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], UserRoutingModule);
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map