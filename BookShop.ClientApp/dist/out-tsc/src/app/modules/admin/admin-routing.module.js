import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductManagementComponent } from 'src/app/modules/admin/components/product-management/product-management.component';
import { AuthGuard } from 'src/app/helpers/authentication.guard';
import { OrderManagementComponent } from 'src/app/modules/admin/components/order-management/order-management.component';
import { UserManagementComponent } from 'src/app/modules/admin/components/user-management/user-management.component';
const routes = [
    { path: 'productmanagement', component: ProductManagementComponent, canActivate: [AuthGuard] },
    { path: 'ordermanagement', component: OrderManagementComponent, canActivate: [AuthGuard] },
    { path: 'usermanagement', component: UserManagementComponent, canActivate: [AuthGuard] },
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AdminRoutingModule);
export { AdminRoutingModule };
//# sourceMappingURL=admin-routing.module.js.map